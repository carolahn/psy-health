import React, { useEffect, useState } from "react";
import { CgMenu } from "react-icons/cg";
import { useHistory } from "react-router-dom";

import MobileMenuListWithTokenHeader from "../mobile-menu-links/with-tolken";
import MobileMenuListWithoutTokenHeader from "../mobile-menu-links/without-token";
import { StyledMobileStandardHeaderWithMenu, Container } from "./styled";

const MobileStandardHeaderWithMenu = ({ token }) => {
  const history = useHistory();
  const [mMenu, setMMenu] = useState(false);

  return (
    <StyledMobileStandardHeaderWithMenu>
      <div className="logo" onClick={() => history.push("/")} />
      <CgMenu className="menu" onClick={() => setMMenu((prevState) => !prevState)} />
      {mMenu &&
        (!token ? (
          <>
            <Container onClick={() => setMMenu((prevState) => !prevState)} />
            <MobileMenuListWithoutTokenHeader
              setMMenu={setMMenu}
              className="mobile-menu-list-whithout-token"
            />
          </>
        ) : (
          <>
            <Container onClick={() => setMMenu((prevState) => !prevState)} />
            <MobileMenuListWithTokenHeader setMMenu={setMMenu} />
          </>
        ))}
    </StyledMobileStandardHeaderWithMenu>
  );
};

export default MobileStandardHeaderWithMenu;
