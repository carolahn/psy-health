import React from "react";
import { useHistory } from "react-router-dom";

import { StyledMobileMenuListWithoutTokenHeader } from "./styled";

const MobileMenuListWithoutTokenHeader = ({ setMMenu }) => {
  const history = useHistory();
  return (
    <StyledMobileMenuListWithoutTokenHeader className="mobile-menu-list-whithout-token">
      <div
        className="mobile-list"
        onClick={() => {
          history.push("/buscar");
          setMMenu(false);
        }}>
        Encontre um psicólogo
      </div>
      <div
        className="mobile-list"
        onClick={() => {
          history.push("/login/psi");
          setMMenu(false);
        }}>
        Sou psicólogo
      </div>
      <div
        className="mobile-list"
        onClick={() => {
          history.push("/cadastro");
          setMMenu(false);
        }}>
        Cadastro
      </div>
      <div
        className="mobile-list"
        onClick={() => {
          history.push("/login");
          setMMenu(false);
        }}>
        Login
      </div>
    </StyledMobileMenuListWithoutTokenHeader>
  );
};

export default MobileMenuListWithoutTokenHeader;
