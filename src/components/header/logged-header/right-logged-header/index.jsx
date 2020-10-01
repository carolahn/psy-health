import React from "react";
import { useHistory } from "react-router-dom";

import { StyledRightLoggedHeader } from "./styled";

const RightLoggedHeader = () => {
  const history = useHistory();
  return (
    <StyledRightLoggedHeader>
      <div className="links" onClick={() => history.push("/my-appointments")}>
        Minhas Consultas
      </div>
      <div className="perfil">Perfil</div>
    </StyledRightLoggedHeader>
  );
};

export default RightLoggedHeader;
