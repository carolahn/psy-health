import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Calendar from "../../components/calendar";
import { getAppointments } from "../../redux/actions/appointments";
import { getOneUser } from "../../redux/actions/users";
import { MainWrapper } from "./styled";

const PsiPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const oneUser = useSelector((state) => state.users.oneUser);
  const allAppointments = useSelector((state) => state.appointments.allAppointments);

  const login = useSelector((state) => state.login);

  // useEffect(() => {
  //   dispatch(getOneUser(login.user.id));
  //   dispatch(getAppointments());
  //   // history.push("/psi/consultas");
  // }, []);

  useEffect(() => {
    if (allAppointments) {
      dispatch(getAppointments());
    } else if (JSON.stringify(allAppointments) === "{}") {
      dispatch(getAppointments());
    }
  }, []);

  return (
    <MainWrapper>
      <p>Home do psicólogo</p>
      {/* {allUsers
            ? allAppointments && (
                <Calendar
                  type="psic-info"
                  psicInfo={allUsers["13"]}
                  patInfo={allUsers["12"]}
                  allAppointments={allAppointments}
                />
              )
            : ""} */}
    </MainWrapper>
  );
};

export default PsiPage;
