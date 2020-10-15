/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { StyledLeftLoggedHeader } from "./styled";

const LeftLoggedHeader = () => {
  const is_psic = useSelector((state) => state.login.user.is_psic);
  const history = useHistory();
  return (
    <StyledLeftLoggedHeader>
      <div className="logo" onClick={() => history.push("/")} />
      {is_psic ? (
        <></>
      ) : (
        <div className="links" onClick={() => history.push("/buscar")}>
          Encontre um psicólogo
        </div>
      )}
    </StyledLeftLoggedHeader>
  );
};

export default LeftLoggedHeader;
