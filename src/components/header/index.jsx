/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import { useWindowSize } from "../../hooks";
import { login_urls } from "../../pages/login";
import { LeftNonLoggedHeader, RightNonLoggedHeader } from "./non-logged-header";
import { StyledHeader } from "./styled";

const urls = ["/", "search", "search/", ...login_urls];
const non_header_urls = [...login_urls, "/register", "/register/"];
const header_urls = ["", "/", "search", "search/"];

const Header = () => {
  const token = false;
  const { width } = useWindowSize();
  const where = useLocation().pathname;
  const history = useHistory();

  return (
    <>
      {non_header_urls.some((e) => e === where) ? (
        <></>
      ) : header_urls.some((e) => e === where) ? (
        token ? (
          <StyledHeader>
            <div className="header left">
              <div className="logo">LOGO</div>
              <div className="links" onClick={() => history.push("/search")}>
                Encontre um psicólogo
              </div>
              <div className="links">Sou psicólogo</div>
            </div>
            <div className="header right" />
          </StyledHeader>
        ) : (
          <StyledHeader>
            <LeftNonLoggedHeader />
            <RightNonLoggedHeader />
          </StyledHeader>
        )
      ) : (
        <StyledHeader>
          <LeftNonLoggedHeader />
          <RightNonLoggedHeader />
        </StyledHeader>
      )}
    </>
  );
};

export default Header;
