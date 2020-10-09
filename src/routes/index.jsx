import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import Footer from "../components/footer";
import Login from "../pages/login";
import PatPageTest from "../pages/pat-page-test";
import PsiPage from "../pages/psi-page";
import PsiAppointments from "../pages/psi-page/psi-consultas";
import PsiProfile from "../pages/psi-page/psi-perfil";
import Register from "../pages/register";

const Routes = (props) => {
  const token = useSelector((state) => state.login.token);
  const access = useSelector((state) => state.login.user.is_psic);

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
            <Route path="/">
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
            <Route path="/">
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
        <Register />
      </Route>

      <Route path="/fruta">
        Home Não logado
        <PatPageTest />
        <Footer />
      </Route>
    </Switch>
  );
};

export default Routes;
