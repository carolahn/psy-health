import React, { useState } from "react";
import { CgProfile as PF } from "react-icons/cg";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import RightMenuListWithTokenHeader from "../right-logged-menu";
import { Container, StyledRightLoggedHeader } from "./styled";

const RightLoggedHeader = () => {
  const user_id = useSelector((state) => state.login.user.id);
  const is_psic = useSelector((state) => state.login.user.is_psic);
  const [rMenu, setRMenu] = useState(false);
  const history = useHistory();
  return (
    <StyledRightLoggedHeader>
      <div
        className="links"
        onClick={() =>
          history.push(is_psic ? `/psi/consultas/${user_id}` : `/consultas/${user_id}`)
        }>
        Minhas Consultas
      </div>
      <PF className="profile" onClick={() => setRMenu((prevState) => !prevState)} />
      {rMenu && (
        <>
          <Container onClick={() => setRMenu(false)} />
          <RightMenuListWithTokenHeader setMMenu={setRMenu} />
        </>
      )}
    </StyledRightLoggedHeader>
  );
};

export default RightLoggedHeader;
