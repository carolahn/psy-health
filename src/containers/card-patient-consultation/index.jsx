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
  const [avaliationExist, setAvaliationExist] = useState([]);
  const [consultationStart, setConsultationStart] = useState(false);
  const allAppointments = useSelector((state) => state.appointments.allAppointments);
  const allDepoiments = useSelector((state) => state.depoiments.allDepoiments);

  const constructDate = () => {
    const partsDate = newAppointment[0].split("-");
    return `${partsDate[2]}/${partsDate[1]}/${partsDate[0]}`;
  };

  const constructHour = () => {
    const partsHour = newAppointment[1].split(":");
    return `${partsHour[0]}:${partsHour[1]}`;
  };
  console.log(psiList)
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

  const filterDepoiments = (appointment) => {
    setAvaliationExist(
      Object.values(allDepoiments).find((depoiment) => appointment.id === depoiment.appointmentId)
    );
  };

  const showMeetingRoom = (appointment) => {
    const start = new Date(appointment.date.start).getTime();
    const today = new Date().getTime();
    return setConsultationStart(start - today <= 1000 * 60 * 120 && start >= today);
  };

  useEffect(() => {
    filterDepoiments(appointment);
  }, [allDepoiments]);

  useEffect(() => {
    filterPsicUser(appointment);
    showMeetingRoom(appointment);
  }, [allAppointments]);

  return (
    <CardPatientConsultation
      consultationStart={consultationStart}
      appointmentId={appointment.id}
      avaliationExist={avaliationExist}
      buttonOrAvaliation={buttonOrAvaliation}
      cancelAppointment={cancelAppointment}
      constructDate={constructDate}
      constructHour={constructHour}
      onePsi={onePsi}
      rescheduleAppointment={rescheduleAppointment}
      href='https://whereby.com/psyhealth'
    />
  );
};

export default CardPatientConsultationContainer;
