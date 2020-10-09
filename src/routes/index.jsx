import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import Footer from "../components/footer";
import RegisterContainer from "../containers/register";
import Login from "../pages/login";
import PsychologistPage from "../pages/psychologist-page";
import Search from "../pages/search";

const Routes = () => {
  const token = useSelector((state) => state.login.token);
  const access = useSelector((state) => state.login.user.is_psic);

  return (
    <Switch>
      {token &&
        (access ? (
          // logado como paciente
          <Switch>
            {/* <Route path="/blog">Blog</Route> */}
            <Route path={["/login", "/cadastro"]}>
              <Redirect to="/" />
            </Route>

            <Route path="/">
              Home Logado
              <Footer />
            </Route>
          </Switch>
        ) : (
          // logado como psicologo
          <Switch>
            <Route path="/psi/perfil/:id" />
            <Route path="/psi/consultas/:id" />
            <Route path="/psi">
              <PsychologistPage />
              <Footer />
            </Route>
          </Switch>
        ))}

      {/* não logado */}
      <Route path="/login">
        <Login />
      </Route>

      <Route path="/cadastro">
        <RegisterContainer />
      </Route>
      <Route path="/buscar">
        <Search />
      </Route>

      <Route path="/">
        Home <Footer />
      </Route>
    </Switch>
  );
};

export default Routes;
