import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../pages/login";

const Routes = (props) => {
  const token = ""; // somente para testes

  return (
    <div className="Routes">
      <Switch>
        {token && (
          // logado
          <Route path="/" />
        )}
        {/* não logado */}
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register" />
        <Route path="/" />
      </Switch>
    </div>
  );
};

export default Routes;
