import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Calendar from "../components/calendar";
import { psic0, pat0 } from "../components/calendar/data";
import {
  getAppointments,
  getOneAppointment,
  postAppointments,
  patchAppointmentInfo,
  deleteAppointment,
} from "../redux/actions/appointments";
import { getUsers, getOneUser, patchUserInfo } from "../redux/actions/users";

const Routes = (props) => {
  const token = ""; // somente para testes
  const access = ""; // somente para testes
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getOneUser(1));
    dispatch(
      patchUserInfo(
        12,
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFobmNhcm9saW5hQGdtYWlsLmNvbSIsImlhdCI6MTYwMTYzOTQ4NSwiZXhwIjoxNjAxNjQzMDg1LCJzdWIiOiIxMiJ9.--Yvu0YSF9w412T0gWG8YrULIrMKL9fDoTYYqEATDXQ",
        { teste: "outros dados novos" }
      )
    );
    dispatch(getAppointments());
    dispatch(getOneAppointment(1));
    dispatch(
      postAppointments(
        12,
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFobmNhcm9saW5hQGdtYWlsLmNvbSIsImlhdCI6MTYwMTYzOTQ4NSwiZXhwIjoxNjAxNjQzMDg1LCJzdWIiOiIxMiJ9.--Yvu0YSF9w412T0gWG8YrULIrMKL9fDoTYYqEATDXQ",
        {
          userId: 12,
          id: 2,
          date: {
            start: "2020-10-21 13:00:00",
            end: "2020-10-21 14:00:00",
          },
          patient: {
            name: "Carolina Ahn",
            id: 12,
          },
          psic: {
            name: "Rodisval Pereira",
            id: 13,
          },
        }
      )
    );
    dispatch(
      patchAppointmentInfo(
        12,
        2,
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFobmNhcm9saW5hQGdtYWlsLmNvbSIsImlhdCI6MTYwMTYzOTQ4NSwiZXhwIjoxNjAxNjQzMDg1LCJzdWIiOiIxMiJ9.--Yvu0YSF9w412T0gWG8YrULIrMKL9fDoTYYqEATDXQ",
        {
          date: {
            start: "2020-10-30 13:00:00",
            end: "2020-10-30 14:00:00",
          },
        }
      )
    );
    dispatch(
      deleteAppointment(
        1,
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFobmNhcm9saW5hQGdtYWlsLmNvbSIsImlhdCI6MTYwMTYzOTQ4NSwiZXhwIjoxNjAxNjQzMDg1LCJzdWIiOiIxMiJ9.--Yvu0YSF9w412T0gWG8YrULIrMKL9fDoTYYqEATDXQ"
      )
    );
  }, []);

  return (
    <Switch>
      {token &&
        (access === "paciente" ? (
          // logado como paciente
          <Switch>
            {/* <Route path="/blog">Blog</Route> */}
            <Route path="/search/:id">Search</Route>
            <Route path="/">Home Logado</Route>
          </Switch>
        ) : (
          // logado como psicologo
          <Switch>
            <Route path="/">Home Psicologo</Route>
          </Switch>
        ))}

      {/* não logado */}
      <Route path="/login/psc">Login Psicologo</Route>
      <Route path="/login">Login</Route>

      <Route path="/register/psc">Register Psicologo</Route>
      <Route path="/register">Register</Route>

      <Route path="/">
        Home
        <Calendar type="psic-info" psicInfo={psic0} patInfo={pat0} />
      </Route>
    </Switch>
  );
};

export default Routes;
