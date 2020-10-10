/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useHistory } from "react-router-dom";

import { StyledRightNonLoggedHeader } from "./styled";

const RightNonLoggedHeader = () => {
  const history = useHistory();
  return (
    <StyledRightNonLoggedHeader>
      <div className="links" onClick={() => history.push("/register")}>
        Cadastrar
      </div>
      <div className="links" onClick={() => history.push("/login")}>
        Login
      </div>
    </StyledRightNonLoggedHeader>
  );
};

export default RightNonLoggedHeader;
