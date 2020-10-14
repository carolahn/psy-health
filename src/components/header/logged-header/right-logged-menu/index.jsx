import React from "react";
import { CgProfile, CgProfile as PF } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { logout } from "../../../../redux/actions/login/action";
import { StyledRightMenuListWithTokenHeader } from "./styled";

const RightMenuListWithTokenHeader = ({ setMMenu }) => {
  const is_psic = useSelector((state) => state.login.user.is_psic);
  const user_id = useSelector((state) => state.login.user.id);
  const user_name = useSelector((state) => state.login.user.name)
    .split(" ")
    .slice(0, 2)
    .join(" ");
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <StyledRightMenuListWithTokenHeader className="mobile-menu-list-whithout-token">
      <div className="user-name">
        <CgProfile className="intra" />
        {user_name}
      </div>
      {is_psic ? (
        <div
          className="mobile-list"
          onClick={() => {
            history.push(is_psic ? `/psi/perfil/${user_id}` : `/perfil/${user_id}`);
            setMMenu(false);
          }}>
          Meu perfil
        </div>
      ) : (
        <></>
      )}
      <div
        className="mobile-list logout"
        onClick={() => {
          dispatch(logout());
          history.push("/");
          setMMenu(false);
        }}>
        Logout
      </div>
    </StyledRightMenuListWithTokenHeader>
  );
};

export default RightMenuListWithTokenHeader;
