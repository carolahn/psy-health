import moment from "moment";
import React, { useState, useEffect } from "react";
import { momentLocalizer } from "react-big-calendar";
import { FaHourglassEnd } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import Button from "../../components/button";
import { useWindowSize } from "../../hooks";
import { postAppointments } from "../../redux/actions/appointments";
import { schedule_appointment } from "../../redux/actions/login/action";
import { CalendarWrapper, StyledModal } from "./styled";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { notification } from "antd";
import "antd/dist/antd.css";

// type: "psic-info" -> mostra os workDays em verde e os horários reservados, para ser usado nas páginas de informações sobre o psicólogo
// type: "user-psic" -> mostra os workDays em verde e os horários reservados com o nome do paciente, para ser usado na página pessoal do psicólogo
// type: "user-pat" -> mostra os agendamentos do paciente, para ser usado na página pessoal do paciente (mas a princípio não haverá calendário na pág do paciente)

// como usar o componente Calendar:
// const allUsers = useSelector((state)=> state.users.allUsers)
// OU const oneUser = useSelector((state)=> state.users.oneUser)
// <Calendar type:"psic-info" psicInfo={allUsers[<psicId>]} patInfo={}
// a props patInfo só é necessária no type="user-pat" ou na hora de agendar consulta(deve ser encaminhado para fazer o login)

const Calendar = ({ type, psicInfo = {}, patInfo = {}, allAppointments = {}, login = {} }) => {
  const [width] = useWindowSize();
  const history = useHistory();
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalConfirmVisible, setModalConfirmVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState([]);
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

  // refresh unavailables dates when load or after an schedule
  useEffect(() => {
    if (type === "psic-info") {
      let unavailableDates = thisPsicAppointments.map((item) => {
        let moreThirty = new Date(item.date.start.toLocaleString()).getTime();
        moreThirty = new Date(moreThirty + 1000 * 60 * 30);
        moreThirty = moment(moreThirty.toLocaleString()).format("YYYY-MM-DD HH:mm:ss");
        // console.log(item.date.start, moreThirty);
        return [item.date.start, moreThirty];
      });
      unavailableDates = unavailableDates.flat();
      setUnavailable(...[unavailableDates]);
    }
  }, [psicInfo, allAppointments]);

  moment.locale("en-US");
  const localizer = momentLocalizer(moment);

  function onSlotChange(slotInfo) {
    const startDate = moment(slotInfo.start.toLocaleString()).format("YYYY-MM-DD HH:mm:ss");
    let endDate = new Date(slotInfo.start.getTime() + 1000 * 60 * 60);
    endDate = moment(endDate).format("YYYY-MM-DD HH:mm:ss");

    // prevents selecting a time that ends on a non-working hour
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
                if (moreUnf > currentDate) {
                  // console.log("start", startDate);
                  // console.log("end", endDate);

                  setSelectedDate([startDate, endDate]);
                  if (login.token === "") {
                    setModalVisible(true);
                  } else {
                    // console.log(selectedDate);
                    dispatch(schedule_appointment(psicInfo, startDate, endDate));
                    setModalConfirmVisible(true);
                  }
                  //enviar para fazer login, depois fazer dispatch(postAppointment(userId,token,{appointment data}))
                }
              }
            }
          }
        }
      }
    }
  }

  const handleOnCancel = () => {
    dispatch(schedule_appointment("", "", ""));
    setModalVisible(false);
  };

  const handleOnOk = () => {
    if (JSON.stringify(login.user) === "{}") {
      // console.log("voce precisa estar logado");
      dispatch(schedule_appointment(psicInfo, selectedDate[0], selectedDate[1]));
      history.push("/login");
    }
    setModalVisible(false);
  };

  useEffect(() => {
    if (login.token !== "" && login.chosenPsi !== "" && type !== "user-psic") {
      // console.log("quer agendar?", login.psiAppointmentBeginning);
      setModalConfirmVisible(true);
    } else {
      setModalConfirmVisible(false);
    }
  }, []);

  const handleOnNotConfirm = () => {
    dispatch(schedule_appointment("", "", ""));
    setModalConfirmVisible(false);
  };

  const handleOnConfirm = () => {
    dispatch(
      postAppointments(login.user.id, login.token, {
        date: {
          start: login.psiAppointmentBeginning,
          end: login.psiAppointmentEnding,
        },
        psic: {
          name: login.chosenPsi.name,
          id: login.chosenPsi.id,
        },
        patient: {
          name: login.user.name,
          id: login.user.id,
        },
      })
    );
    setModalConfirmVisible(false);
    setTimeout(dispatch(schedule_appointment("", "", "")), 200);
    setTimeout(
      notification.success({
        key: login.user.id,
        message: "Concluído",
        description: "Agendamento realizado com sucesso!",
      }),
      200
    );
  };

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
      {width >= 430 && (
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

      {width < 430 && (
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
      <StyledModal
        title="Efetuar login"
        centered
        visible={modalVisible}
        onOk={handleOnOk}
        onCancel={handleOnCancel}
        footer={[
          <Button
            key="cancel"
            width="150px"
            height="35px"
            fontSize="19px"
            title="Cancelar"
            onClick={handleOnCancel}
          />,
          <Button
            key="submit"
            width="150px"
            height="35px"
            fontSize="19px"
            title="Login"
            onClick={handleOnOk}
          />,
        ]}>
        <p className="modal-confirm-text">Para agendar a consulta, você precisa efetuar o Login.</p>
      </StyledModal>
      <StyledModal
        title="Confirmar consulta"
        centered
        visible={modalConfirmVisible}
        onOk={handleOnConfirm}
        onCancel={handleOnNotConfirm}
        footer={[
          <Button
            key="cancel"
            width="150px"
            height="35px"
            fontSize="19px"
            title="Cancelar"
            onClick={handleOnNotConfirm}
          />,
          <Button
            key="submit"
            width="150px"
            height="35px"
            fontSize="19px"
            title="Agendar"
            onClick={handleOnConfirm}
          />,
        ]}>
        <p className="modal-confirm-text">Gostaria de agendar?</p>
        <p className="modal-confirm-text">
          <span className="modal-confirm-label">Data: </span>
          <span>
            {login.psiAppointmentBeginning &&
              login.psiAppointmentBeginning.toLocaleString().slice(0, 10)}
          </span>
        </p>
        <p className="modal-confirm-text">
          <span className="modal-confirm-label">Horário: </span>
          <span>
            {login.psiAppointmentBeginning &&
              login.psiAppointmentBeginning.toLocaleString().slice(11, 13)}
            h
            {login.psiAppointmentBeginning &&
              login.psiAppointmentBeginning.toLocaleString().slice(14, 16)}
            min
          </span>
        </p>
      </StyledModal>
    </>
  );
};

export default Calendar;
