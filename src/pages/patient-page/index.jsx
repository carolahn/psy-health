import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardPatientConsultationContainer from "../../containers/card-patient-consultation";
import { getAppointments } from "../../redux/actions/appointments";
import { getDepoiments } from "../../redux/actions/depoiments";
import { ContainerCards, TitleContainerAppointments, TitleContainerHistory } from "./styled";

const PatientPage = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.login.user.id);
  const psiList = useSelector((state) => state.login.psiList);
  const allAppointments = useSelector((state) => state.appointments.allAppointments);

  useEffect(() => {
    dispatch(getAppointments());
    dispatch(getDepoiments());
  }, []);

  // const compareDates = (dateAppointment) => {
  //   const parts = dateAppointment[0].split("-");
  //   const today = new Date();

  //   dateAppointment = new Date(parts[0], parts[1] - 1, parts[2]);
  //   return dateAppointment >= today;
  // };

  const compareDates = (dateStartAppointment) => {
    let today = new Date();
    today = moment(today).format("YYYY-MM-DD HH:mm:ss");
    return dateStartAppointment >= today;
  };

  // const showMeetingRoom = (appointment) => {
  //   const start = new Date(appointment.date.start).getTime();
  //   const today = new Date().getTime();
  //   return start - today <= 1000 * 60 * 30;
  // };

  const constructCardWithButtons = (appointment, index) => {
    return (
      <CardPatientConsultationContainer
        key={index}
        buttonOrAvaliation
        psiList={psiList}
        appointment={appointment}
      />
    );
  };

  const constructCardWithAvaliation = (appointment, index) => {
    return (
      <CardPatientConsultationContainer
        key={index}
        buttonOrAvaliation={false}
        psiList={psiList}
        appointment={appointment}
      />
    );
  };

  return (
    <ContainerCards>
      <TitleContainerAppointments>Consultas Agendadas</TitleContainerAppointments>
      {allAppointments &&
        Object.values(allAppointments)
          .filter((appointment) => appointment.userId === userId)
          .sort(function (a, b) {
            return new Date(a.date.start).getTime() - new Date(b.date.start).getTime();
          })
          .map(
            (appointment, index) =>
              compareDates(appointment.date.start) && constructCardWithButtons(appointment, index)
          )}
      <TitleContainerHistory>Histórico de Consultas</TitleContainerHistory>
      {allAppointments &&
        Object.values(allAppointments)
          .filter((appointment) => appointment.userId === userId)
          .sort(function (b, a) {
            return new Date(a.date.start).getTime() - new Date(b.date.start).getTime();
          })
          .map(
            (appointment, index) =>
              !compareDates(appointment.date.start) &&
              constructCardWithAvaliation(appointment, index)
          )}

      {/* <TitleContainerAppointments>Consultas Agendadas</TitleContainerAppointments>
      {allAppointments &&
        Object.values(allAppointments)
          .filter((appointment) => appointment.userId === userId)
          .map(
            (appointment, index) =>
              compareDates(appointment.date.start.split(" ")) &&
              constructCardWithButtons(appointment, index)
          )}
      <TitleContainerHistory>Histórico de Consultas</TitleContainerHistory>
      {allAppointments &&
        Object.values(allAppointments)
          .filter((appointment) => appointment.userId === userId)
          .map(
            (appointment, index) =>
              !compareDates(appointment.date.start.split(" ")) &&
              constructCardWithAvaliation(appointment, index)
          )} */}
    </ContainerCards>
  );
};

export default PatientPage;
