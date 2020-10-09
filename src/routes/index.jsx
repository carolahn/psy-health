import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import Footer from "../components/footer";
import DepoimentsFormContainer from "../containers/depoiments-form";
import RegisterContainer from "../containers/register";
import Login from "../pages/login";
import PatPageTest from "../pages/pat-page-test";
import PsiPage from "../pages/psi-page";
import PsiAppointments from "../pages/psi-page/psi-consultas";
import PsiProfile from "../pages/psi-page/psi-perfil";
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
            <Route path="/fruta">
              Home Fruta
              <PatPageTest />
              <Footer />
            </Route>
            <Route exact path="/">
              Home Logado
              <Footer />
            </Route>
          </Switch>
        ) : (
          // logado como psicologo
          <Switch>
            <Route path="/psi/perfil/:id">
              <PsiProfile />
              <Footer />
            </Route>
            <Route path="/psi/consultas/:id">
              <PsiAppointments />
              <Footer />
            </Route>
            <Route path="/psi">
              <PsiPage />
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
      <Route path="/fruta">
        Home Não logado
        <PatPageTest />
        <Footer />
      </Route>

      <Route exact path="/">
        Home
        <button onClick={() => setModalVisible(true)}>Display a modal dialog</button>
        <DepoimentsFormContainer
          showModal={{ modalVisible, setModalVisible }}
          psicId={2}
          psicName="João Cleber"
        />
        <Footer />
      </Route>
    </Switch>
  );
};

export default Routes;
