import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import Footer from "../components/footer";
import DepoimentsFormContainer from "../containers/depoiments-form";
import RegisterContainer from "../containers/register";
import Login from "../pages/login";
import PatientPage from "../pages/patient-page";
import PsychologistPage from "../pages/psychologist-page";
import Register from "../pages/register";
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

            <Route path="/">
              <PatientPage />
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

      <Route path="/register">
        <RegisterContainer />
      </Route>
      <Route path="/buscar">
        <Search />
      </Route>

      <Route path="/">
        <button onClick={() => setModalVisible(true)}>Display a modal dialog</button>
        <DepoimentsFormContainer
          showModal={{ modalVisible, setModalVisible }}
          psicId={2}
          psicName="João Cleber"
        />
        Home <Footer />
      </Route>
    </Switch>
  );
};

export default Routes;
