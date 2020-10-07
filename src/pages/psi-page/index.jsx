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

  const login = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(getOneUser(login.user.id));
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
          Perfil
          <PsiProfile />
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
