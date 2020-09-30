import moment from "moment";
import React from "react";
import { momentLocalizer } from "react-big-calendar";

import useWindowSize from "./use-window-size";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { CalendarWrapper } from "./styled";

const Calendar = ({ type, psicInfo = {}, patInfo = {} }) => {
  const size = useWindowSize();
  console.log("patInfo", patInfo);

  let eventList = [];
  // eventList = psicInfo.appointments.map((item) => {
  if (type === "psic-info") {
    eventList = psicInfo.appointments.map((item) => {
      return {
        title: "Reservado",
        start: new Date(item.date.start),
        end: new Date(item.date.end),
        appointment_id: item.id,
        patient_id: item.patient.id,
      };
    });
  } else if (type === "user-pat") {
    eventList = patInfo.appointments.map((item) => {
      return {
        title: item.psic.name,
        start: new Date(item.date.start),
        end: new Date(item.date.end),
        appointment_id: item.id,
        psic_id: item.psic.id,
      };
    });
  } else if (type === "user-psic") {
    eventList = psicInfo.appointments.map((item) => {
      return {
        title: item.patient.name,
        start: new Date(item.date.start),
        end: new Date(item.date.end),
        appointment_id: item.id,
        patient_id: item.patient.id,
      };
    });
  }
  // });
  // console.log(eventList);

  moment.locale("en-US");
  const localizer = momentLocalizer(moment);

  function onSlotChange(slotInfo) {
    var startDate = moment(slotInfo.start.toLocaleString()).format("YYYY-MM-DD HH:mm:ss");
    var endDate = moment(slotInfo.end.toLocaleString()).format("YYYY-MM-DD HH:mm:ss");
    // console.log("startTime", startDate); //shows the start time chosen
    // console.log("endTime", endDate); //shows the end time chosen
    // console.log("startcarol", moment(slotInfo.start.toLocaleString())._d); //pegar sat ou sun por aqui
    // console.log(slotInfo);

    if (type === "psic-info") {
      console.log("user-pat: Quer agendar?", slotInfo);
      return {
        id: psicInfo.appointments.length,
        date: {
          start: startDate,
          end: endDate,
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
    } else {
      return "";
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
          onClick={(e) => console.log("clique")}
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
