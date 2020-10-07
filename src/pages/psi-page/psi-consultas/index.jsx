import React from "react";
import { useSelector } from "react-redux";

import CardListPsiAppointments from "../../../components/card-list-psi-appointments";

const PsiAppointments = () => {
  const login = useSelector((state) => state.login);
  const allAppointments = useSelector((state) => state.appointments.allAppointments);
  const myAppointments = {};
  if (allAppointments) {
    Object.values(allAppointments).map((item) => {
      if (item.psic.id === login.user.id) {
        myAppointments[item.date.start] = { ...item };
      }
    });
    console.log("myAppointments", myAppointments);
  }
  return (
    <div className="psi-appointments-page">
      <p>Próximas consultas</p>
      {myAppointments && <CardListPsiAppointments type="next" myAppointments={myAppointments} />}
    </div>
  );
};

export default PsiAppointments;
