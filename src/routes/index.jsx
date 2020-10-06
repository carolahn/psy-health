import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import DepoimentsForm from "../components/depoiments-form";
import Footer from "../components/footer";
import Login from "../pages/login";
import PsychologistPage from "../pages/psychologist-page";
import Register from "../pages/register";

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
              <button onClick={() => setModalVisible(true)} psicId={1}>
                {/* psicId vem do card */}
                Display a modal dialog
              </button>
              <DepoimentsForm showModal={[modalVisible, setModalVisible]} />
              Home Logado
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
