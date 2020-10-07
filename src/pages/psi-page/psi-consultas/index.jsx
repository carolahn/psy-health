import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CardListPsiAppointments from "../../../components/card-list-psi-appointments";
import { getAppointments } from "../../../redux/actions/appointments";
import { MainContainer, MainWrapper } from "./styled";

const PsiAppointments = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const allAppointments = useSelector((state) => state.appointments.allAppointments);
  const myAppointments = {};

  useEffect(() => {
    if (allAppointments) {
      dispatch(getAppointments());
    } else if (JSON.stringify(allAppointments) === "{}") {
      dispatch(getAppointments());
    }
  }, []);

  if (allAppointments) {
    Object.values(allAppointments).map((item) => {
      if (item.psic.id === login.user.id) {
        myAppointments[item.date.start] = { ...item };
      }
    });
    console.log("myAppointments", myAppointments);
  }
  return (
    <MainContainer className="psi-appointments-page">
      <MainWrapper>
        <p>Próximas consultas</p>
        {myAppointments && <CardListPsiAppointments type="next" myAppointments={myAppointments} />}
      </MainWrapper>
    </MainContainer>
  );
};

export default PsiAppointments;
