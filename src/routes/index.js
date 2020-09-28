import React from "react";
import { Switch, Route } from "react-router-dom";

const Routes = (props) => {
  const token = ""; // somente para testes

  return (
    <div className="Routes">
      <Switch>
        {token && (
          // logado
          <Route path="/">Home Logado</Route>
        )}
        {/* não logado */}
        <Route path="/login">Login</Route>
        <Route path="/register">Register</Route>
        <Route path="/">Home</Route>
      </Switch>
    </div>
  );
};

export default Routes;
