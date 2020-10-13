import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import RegisterContainer from "../containers/register";
import DeslogHome from "../pages/deslog-home";
import Login from "../pages/login";
import PatientPage from "../pages/patient-page";
import PsiPage from "../pages/psi-page";
import PsiAppointments from "../pages/psi-page/psi-consultas";
import PsiProfile from "../pages/psi-page/psi-perfil";
import Search from "../pages/search";

const Routes = () => {
  const token = useSelector((state) => state.login.token);
  const access = useSelector((state) => state.login.user.is_psic);

  return (
    <Switch>
      {token &&
        (!access ? (
          // logado como paciente
          <Switch>
            {/* <Route path="/blog">Blog</Route> */}
            <Route path={["/login", "/cadastro"]}>
              <Redirect to="/" />
            </Route>
            <Route exact path="/">
              <PatientPage />
            </Route>
          </Switch>
        ) : (
          // logado como psicologo
          <Switch>
            <Route path="/psi/perfil/:id">
              <PsiProfile />
            </Route>
            <Route path="/psi/consultas/:id">
              <PsiAppointments />
            </Route>
            <Route path="/psi">
              <PsiPage />
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
        <DeslogHome />
      </Route>
    </Switch>
  );
};

export default Routes;
