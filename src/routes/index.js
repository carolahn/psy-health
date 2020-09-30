import React from "react";
import { Switch, Route } from "react-router-dom";

import Calendar from "../components/calendar";
import { psic0, pat0 } from "../components/calendar/data";

const Routes = (props) => {
  const token = ""; // somente para testes
  const access = ""; // somente para testes

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
