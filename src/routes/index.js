import React from "react";
import { Switch, Route } from "react-router-dom";

const Routes = (props) => {
  return (
    <div className="Routes">
      <Switch>
        <Route path="/">Home</Route>
      </Switch>
    </div>
  );
};

export default Routes;
