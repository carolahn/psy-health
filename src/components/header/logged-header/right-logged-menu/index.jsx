import React from "react";
import { useHistory } from "react-router-dom";

import { StyledRightMenuListWithTokenHeader } from "./styled";

const RightMenuListWithTokenHeader = ({ setMMenu }) => {
  const history = useHistory();
  return (
    <StyledRightMenuListWithTokenHeader className="mobile-menu-list-whithout-token">
      <div
        className="mobile-list"
        onClick={() => {
          history.push("/perfil:id");
          setMMenu(false);
        }}>
        Meu perfil
      </div>
      <div
        className="mobile-list logout"
        onClick={() => {
          history.push("/");
          setMMenu(false);
        }}>
        Logout
      </div>
    </StyledRightMenuListWithTokenHeader>
  );
};

export default RightMenuListWithTokenHeader;
