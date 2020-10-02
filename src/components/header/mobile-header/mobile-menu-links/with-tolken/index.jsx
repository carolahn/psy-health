import React from "react";
import { useHistory } from "react-router-dom";

import { StyledMobileMenuListWithTokenHeader } from "./styled";

const MobileMenuListWithTokenHeader = ({ setMMenu }) => {
  const history = useHistory();
  return (
    <StyledMobileMenuListWithTokenHeader className="mobile-menu-list-whithout-token">
      <div
        className="mobile-list"
        onClick={() => {
          history.push("/search");
          setMMenu(false);
        }}>
        Encontre um psicólogo
      </div>
      <div
        className="mobile-list"
        onClick={() => {
          history.push("/perfil:id");
          setMMenu(false);
        }}>
        Meu perfil
      </div>
      <div
        className="mobile-list"
        onClick={() => {
          history.push("/my-appointments");
          setMMenu(false);
        }}>
        Minhas consultas
      </div>
      <div
        className="mobile-list logout"
        onClick={() => {
          history.push("/");
          setMMenu(false);
        }}>
        Logout
      </div>
    </StyledMobileMenuListWithTokenHeader>
  );
};

export default MobileMenuListWithTokenHeader;
