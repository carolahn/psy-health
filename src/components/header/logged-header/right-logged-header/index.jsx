import React, { useState } from "react";
import { CgProfile as PF } from "react-icons/cg";
import { useHistory } from "react-router-dom";

import RightMenuListWithTokenHeader from "../right-logged-menu";
import { Container, StyledRightLoggedHeader } from "./styled";

const RightLoggedHeader = () => {
  const [rMenu, setRMenu] = useState(false);
  const history = useHistory();
  return (
    <StyledRightLoggedHeader>
      <div className="links" onClick={() => history.push("/my-appointments")}>
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
