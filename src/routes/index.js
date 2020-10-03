import React from "react";
import { Switch, Route } from "react-router-dom";

import Footer from "../components/footer";
import RegisterUser from "../pages/register-user";

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
            <Footer />
          </Switch>
        ) : (
          // logado como psicologo
          <Switch>
            <Route path="/">Home Psicologo</Route>
            <Footer />
          </Switch>
        ))}

      {/* não logado */}
      <Route path="/login/psc">Login Psicologo</Route>
      <Route path="/login">Login</Route>
      <Route path="/register">
        <RegisterUser />
      </Route>

      <Route path="/">
        Home <Footer />
      </Route>
    </Switch>
  );
};

export default Routes;
