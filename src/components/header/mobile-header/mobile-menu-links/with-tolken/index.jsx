import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { logout } from "../../../../../redux/actions/login/action";
import { StyledMobileMenuListWithTokenHeader } from "./styled";

const MobileMenuListWithTokenHeader = ({ setMMenu }) => {
  const token = useSelector((state) => state.login.token);
  const is_psic = useSelector((state) => state.login.user.is_psic);
  const user_id = useSelector((state) => state.login.user.id);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <StyledMobileMenuListWithTokenHeader className="mobile-menu-list-whithout-token">
      {is_psic ? (
        <></>
      ) : (
        <div
          className="mobile-list"
          onClick={() => {
            history.push("/busca");
            setMMenu(false);
          }}>
          Encontre um psicólogo
        </div>
      )}
      <div
        className="mobile-list"
        onClick={() => {
          history.push(is_psic ? `/psi/perfil/${user_id}` : `/perfil/${user_id}`);
          setMMenu(false);
        }}>
        Meu perfil
      </div>
      <div
        className="mobile-list"
        onClick={() => {
          history.push(is_psic ? `/psi/consultas/${user_id}` : `/consultas/${user_id}`);
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
