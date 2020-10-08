import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import Footer from "../components/footer";
import Login from "../pages/login";
import PatientPage from "../pages/patient-page";
import PsychologistPage from "../pages/psychologist-page";
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

            <Route path="/">
              <PatientPage />
              <Footer />
            </Route>
          </Switch>
        ) : (
            // logado como psicologo
            <Switch>
              <Route path="/">
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
        <Register />
      </Route>

      <Route path="/">
        Home <Footer />
      </Route>
    </Switch>
  );
};

export default Routes;
