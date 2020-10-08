import moment from "moment";
import React, { useState, useEffect } from "react";
import { momentLocalizer } from "react-big-calendar";

import { CalendarWrapper } from "./styled";
import useWindowSize from "./use-window-size";
import "react-big-calendar/lib/css/react-big-calendar.css";

// type: "psic-info" -> mostra os workDays em verde e os horários reservados, para ser usado nas páginas de informações sobre o psicólogo
// type: "user-psic" -> mostra os workDays em verde e os horários reservados com o nome do paciente, para ser usado na página pessoal do psicólogo
// type: "user-pat" -> mostra os agendamentos do paciente, para ser usado na página pessoal do paciente (mas a princípio não haverá calendário na pág do paciente)

// como usar o componente Calendar:
// const allUsers = useSelector((state)=> state.users.allUsers)
// OU const oneUser = useSelector((state)=> state.users.oneUser)
// <Calendar type:"psic-info" psicInfo={allUsers[<psicId>]} patInfo={}
// a props patInfo só é necessária no type="user-pat" ou na hora de agendar consulta(deve ser encaminhado para fazer o login)

const Calendar = ({ type, psicInfo = {}, patInfo = {}, allAppointments = {} }) => {
  const size = useWindowSize();
  const [unavailable, setUnavailable] = useState([]);
  const thisPsicAppointments = Object.values(allAppointments).filter(
    (item) => item.psic.id === psicInfo.id
  );
  const thisPatAppointments = Object.values(allAppointments).filter(
    (item) => item.patient.id === patInfo.id
  );

  let eventList = [];
  if (type === "psic-info") {
    eventList = thisPsicAppointments.map((item) => {
      return {
        title: "Reservado",
        start: new Date(item.date.start),
        end: new Date(item.date.end),
        appointment_id: item.id,
        patient_id: item.patient.id,
      };
    });
  } else if (type === "user-pat") {
    eventList = thisPatAppointments.map((item) => {
      return {
        title: item.psic.name,
        start: new Date(item.date.start),
        end: new Date(item.date.end),
        appointment_id: item.id,
        psic_id: item.psic.id,
      };
    });
  } else if (type === "user-psic") {
    eventList = thisPsicAppointments.map((item) => {
      return {
        title: item.patient.name,
        start: new Date(item.date.start),
        end: new Date(item.date.end),
        appointment_id: item.id,
        patient_id: item.patient.id,
      };
    });
  }
  // console.log(eventList);

  useEffect(() => {
    if (type === "psic-info") {
      let unavailableDates = thisPsicAppointments.map((item) => {
        return [item.date.start];
      });
      unavailableDates = unavailableDates.flat();
      setUnavailable(...[unavailableDates]);
    }
  }, [psicInfo]);

  moment.locale("en-US");
  const localizer = momentLocalizer(moment);
  console.log("localizer", localizer);

  function onSlotChange(slotInfo) {
    var startDate = moment(slotInfo.start.toLocaleString()).format("YYYY-MM-DD HH:mm:ss");
    var endDate = moment(slotInfo.end.toLocaleString()).format("YYYY-MM-DD HH:mm:ss");
    // console.log("startcarol", moment(slotInfo.start.toLocaleString())._d); //pegar sat ou sun por aqui

    const thirtyMinutesMoreUnformatted = new Date(slotInfo.start.getTime() + 1000 * 60 * 30);
    const thirtyMinutesMore = moment(thirtyMinutesMoreUnformatted.toLocaleString()).format(
      "YYYY-MM-DD HH:mm:ss"
    );

    if (type === "psic-info") {
      let workDays = {};
      workDays = { ...psicInfo.workDays };
      const keys = Object.keys(workDays);
      for (let i = 0; i <= keys.length; i++) {
        if (slotInfo.start.getDay().toString() === keys[i]) {
          const hours = Object.values(workDays[keys[i]]);
          for (let j = 0; j < hours.length; j++) {
            if (
              slotInfo.start.getHours() === hours[j] &&
              hours.includes(thirtyMinutesMoreUnformatted.getHours())
            ) {
              if (!unavailable.includes(startDate) && !unavailable.includes(thirtyMinutesMore)) {
                const currentDate = new Date();
                const moreUnf = new Date(slotInfo.start.getTime() + 1000 * 60 * 30);
                // const more = moment(moreUnf.toLocaleString()).format("YYYY-MM-DD HH:mm:ss");
                if (moreUnf > currentDate) {
                  console.log("user-pat: Quer agendar?", slotInfo);
                  //enviar para fazere login, depois fazer dispatch(postAppointment(userId,token,{appointment data}))
                }
              }

              return {
                id: allAppointments.length,
                date: {
                  start: startDate,
                  end: thirtyMinutesMore,
                },
                psic: {
                  name: psicInfo.name,
                  id: psicInfo.id,
                },
                patient: {
                  name: patInfo.name,
                  id: patInfo.id,
                },
              };
            }
          }
        }
      }
    }
  }

  function onEventClick(event) {
    if (type === "user-psic") {
      console.log("onEventClick - Mostrar dados do agendamento?", event);
    } else if (type === "user-pat") {
      console.log("Cancelar agendamento?", event);
    } else {
      return "";
    }
  }

  // function eventStyleGetter(event, start, end, isSelected) {
  //   console.log("event", event);
  //   if (event.title.includes("Conference")) {
  //     var backgroundColor = "#ba274a";
  //   }
  //   var style = {
  //     backgroundColor,
  //     opacity: 0.8,
  //   };
  //   return {
  //     style,
  //   };
  // }

  // const ColoredDateCellWrapper = ({ children }) =>
  //   React.cloneElement(React.Children.only(children), {
  //     style: {
  //       backgroundColor: "lightblue",
  //     },
  //   });

  const customSlotPropGetter = (date) => {
    if (type === "psic-info" || type === "user-psic") {
      let workDays = {};
      workDays = { ...psicInfo.workDays };
      const keys = Object.keys(workDays);
      for (let i = 0; i <= keys.length; i++) {
        if (date.getDay().toString() === keys[i]) {
          const hours = Object.values(workDays[keys[i]]);
          for (let j = 0; j < hours.length; j++) {
            if (date.getHours() === hours[j]) {
              return {
                className: "work-day",
              };
            }
          }
        }
      }
    }
  };

  return (
    <>
      {size.width >= 430 && (
        <CalendarWrapper
          longPressThreshold={10} // para funcionar com touch
          views={["work_week", "day", "agenda"]}
          defaultView="work_week"
          selectable
          onSelectEvent={(event) => onEventClick(event)}
          onSelectSlot={(slotInfo) => onSlotChange(slotInfo)}
          // eventPropGetter={eventStyleGetter}
          localizer={localizer}
          events={eventList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "auto", maxWidth: 900 }}
          formats={{
            timeGutterFormat: (date, culture, localizer) => localizer.format(date, "H:mm", culture),
          }} // formato 24h
          min={moment().minute(0).hour(7).toDate()}
          max={moment().minute(0).hour(20).toDate()}
          // timeslots={2}
          // components={{
          //   timeSlotWrapper: ColoredDateCellWrapper,
          // }}
          slotPropGetter={customSlotPropGetter}
        />
      )}

      {size.width < 430 && (
        <CalendarWrapper
          longPressThreshold={10} // para funcionar com touch
          views={["day", "agenda"]}
          defaultView="day"
          selectable
          onSelectEvent={(event) => onEventClick(event)}
          onSelectSlot={(slotInfo) => onSlotChange(slotInfo)}
          // eventPropGetter={eventStyleGetter}
          localizer={localizer}
          events={eventList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "auto", maxWidth: 900 }}
          formats={{
            timeGutterFormat: (date, culture, localizer) => localizer.format(date, "H:mm", culture),
          }} // formato 24h
          min={moment().minute(0).hour(7).toDate()}
          max={moment().minute(0).hour(20).toDate()}
          slotPropGetter={customSlotPropGetter}
        />
      )}
    </>
  );
};

export default Calendar;
