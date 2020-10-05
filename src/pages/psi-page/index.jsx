import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, Switch, Route } from "react-router-dom";

import Calendar from "../../components/calendar";
import { getAppointments } from "../../redux/actions/appointments";
import { getOneUser } from "../../redux/actions/users";
import PsiProfile from "../psi-perfil";
import { MainWrapper } from "./styled";

const PsiPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const oneUser = useSelector((state) => state.users.oneUser);
  const allAppointments = useSelector((state) => state.appointments.allAppointments);

  useEffect(() => {
    dispatch(getOneUser(13));
    dispatch(getAppointments());
    history.push("/psi/consultas");
  }, []);

  return (
    <MainWrapper>
      <Link to="/psi/consultas">Consultas</Link>
      <Link to="/psi/perfil">Perfil</Link>
      <Switch>
        <Route path="/psi/consultas">Consultas</Route>
        <Route path="/psi/perfil">
          <PsiProfile
            userId={13}
            token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvZGlzdmFsLnBzaWNvbG9nb0BnbWFpbC5jb20iLCJpYXQiOjE2MDE5MzI5MDUsImV4cCI6MTYwMTkzNjUwNSwic3ViIjoiMTMifQ.e7jA2PFJk5WUcUtluOC4fDReSyif-OEdQvvQ8XDZFMk"
          />
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
        </Route>
      </Switch>
    </MainWrapper>
  );
};

export default PsiPage;
