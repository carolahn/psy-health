import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { logout } from "../../../../redux/actions/login/action";
import { StyledRightMenuListWithTokenHeader } from "./styled";

const RightMenuListWithTokenHeader = ({ setMMenu }) => {
  const token = useSelector((state) => state.login.token);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <StyledRightMenuListWithTokenHeader className="mobile-menu-list-whithout-token">
      <div
        className="mobile-list"
        onClick={() => {
          history.push("/perfil/:id");
          setMMenu(false);
        }}>
        Meu perfil
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
    </StyledRightMenuListWithTokenHeader>
  );
};

export default RightMenuListWithTokenHeader;
