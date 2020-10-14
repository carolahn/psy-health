import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import CardPatientConsultation from "../../components/card-patient-consultation";
import { deleteAppointment, getAppointments } from "../../redux/actions/appointments";

const CardPatientConsultationContainer = ({ psiList, appointment, buttonOrAvaliation }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const newAppointment = appointment.date.start.split(" ");
  const token = useSelector((state) => state.login.token);
  const [onePsi, setOnePsi] = useState("");
  const allAppointments = useSelector((state) => state.appointments.allAppointments);

  const constructDate = () => {
    const partsDate = newAppointment[0].split("-");
    return `${partsDate[2]}/${partsDate[1]}/${partsDate[0]}`;
  };

  const constructHour = () => {
    const partsHour = newAppointment[1].split(":");
    return `${partsHour[0]}:${partsHour[1]}`;
  };

  const cancelAppointment = () => {
    dispatch(deleteAppointment(appointment.id, token));
  };

  const rescheduleAppointment = () => {
    dispatch(deleteAppointment(appointment.id, token));
    history.push(`/psi/agendamentos/${onePsi[0].id}`);
  };

  const filterPsicUser = (appointment) => {
    setOnePsi(psiList.filter((psi) => psi.id === appointment.psic.id));
  };

  useEffect(() => {
    filterPsicUser(appointment);
  }, [allAppointments]);

  return (
    <CardPatientConsultation
      onePsi={onePsi}
      buttonOrAvaliation={buttonOrAvaliation}
      constructDate={constructDate}
      constructHour={constructHour}
      cancelAppointment={cancelAppointment}
      rescheduleAppointment={rescheduleAppointment}
    />
  );
};

export default CardPatientConsultationContainer;
