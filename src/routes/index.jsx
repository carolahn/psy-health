import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import DepoimentsFormContainer from "../containers/depoiments-form";
import RegisterContainer from "../containers/register";
import Home from "../pages/home";
import Login from "../pages/login";
import PatPageTest from "../pages/pat-page-test";
import PatientPage from "../pages/patient-page";
import PsiPage from "../pages/psi-page";
import PsiAppointments from "../pages/psi-page/psi-consultas";
import PsiProfile from "../pages/psi-page/psi-perfil";
import Register from "../pages/register";
import SchedulingPage from "../pages/scheduling-page";
import Search from "../pages/search";

const Routes = (props) => {
  const token = useSelector((state) => state.login.token);
  const access = useSelector((state) => state.login.user.is_psic);
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <Switch>
      {token &&
        (!access ? (
          // logado como paciente
          <Switch>
            {/* <Route path="/blog">Blog</Route> */}
            <Route path={["/login", "/register"]}>
              <Redirect to="/" />
            </Route>
            <Route path="/buscar">
              <Search />
            </Route>
            <Route path="/psi/agendamentos/:id">
              <SchedulingPage />
            </Route>
            <Route path="/fruta">
              Page Test Fruta
              <PatPageTest />
            </Route>
            <Route exact path="/consultas">
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
      <Route path="/register">
        <RegisterContainer />
      </Route>
      <Route path="/buscar">
        <Search />
      </Route>
      <Route path="/psi/agendamentos/:id">
        <SchedulingPage />
      </Route>
      <Route path="/fruta">
        Page Test Fruta - Não logado
        <PatPageTest />
      </Route>
      <Route exact path="/">
        <Home />
        <button onClick={() => setModalVisible(true)}>Display a modal dialog</button>
        <DepoimentsFormContainer
          showModal={{ modalVisible, setModalVisible }}
          psicId={2}
          psicName="João Cleber"
        />
      </Route>
    </Switch>
  );
};

export default Routes;
