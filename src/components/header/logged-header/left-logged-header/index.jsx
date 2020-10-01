/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useHistory } from "react-router-dom";

import { StyledLeftLoggedHeader } from "./styled";

const LeftLoggedHeader = () => {
  const history = useHistory();
  return (
    <StyledLeftLoggedHeader>
      <div className="logo" onClick={() => history.push("/")} />
      <div className="links" onClick={() => history.push("/search")}>
        Encontre um psicólogo
      </div>
    </StyledLeftLoggedHeader>
  );
};

export default LeftLoggedHeader;
