import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { logout } from "../../../../../redux/actions/login/action";
import { StyledMobileMenuListWithTokenHeader } from "./styled";

const MobileMenuListWithTokenHeader = ({ setMMenu }) => {
  const token = useSelector((state) => state.login.token);
  const dispatch = useDispatch();
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
        onClick={async () => {
          dispatch(logout());
          (await !token) && history.push("/");
          setMMenu(false);
        }}>
        Logout
      </div>
    </StyledMobileMenuListWithTokenHeader>
  );
};

export default MobileMenuListWithTokenHeader;
