import React from "react";
import { Switch, Route } from "react-router-dom";

import Footer from "../components/footer";
import Login from "../pages/login";
import PsychologistPage from "../pages/psychologist-page";

const Routes = (props) => {
  const token = ""; // somente para testes
  const access = ""; // somente para testes

  return (
    <div className="Routes">
      <Switch>
        {token &&
          (!access ? (
            // logado como paciente
            <Switch>
              // <Route path="/blog">Blog</Route>
              <Route path="/">Home Logado</Route>
              <Footer />
            </Switch>
          ) : (
            // logado como psicologo
            <Switch>
              <Route path="/">
                <PsychologistPage />
              </Route>
              <Footer />
            </Switch>
          ))}
        {/* não logado */}
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register" />
        <Route path="/">
          Home <Footer />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
