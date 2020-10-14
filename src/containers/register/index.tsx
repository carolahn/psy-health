import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import Register from "../../pages/register";

const RegisterContainer = () => {
  const history = useHistory();
  const where = useLocation().pathname;

  return <Register where={where} history={history} />;
};

export default RegisterContainer;
