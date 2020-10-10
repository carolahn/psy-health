/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { useWindowSize } from "../../hooks";
import { login_urls } from "../../pages/login";
import { LeftLoggedHeader, RightLoggedHeader } from "./logged-header";
import { MobileStandardHeaderWithMenu } from "./mobile-header";
import { LeftNonLoggedHeader, RightNonLoggedHeader } from "./non-logged-header";
import { StyledHeader, StyledMobileHeader } from "./styled";

const non_header_urls = [
  ...login_urls,
  "/cadastro",
  "/cadastro/",
  "/cadastro/psi",
  "/cadastro/psi/",
];
const header_urls = ["", "/", "/busca", "/busca/", "/psi", "/psi/"];

const start_with_urls = [
  "/consultas",
  "/consultas/",
  "/psi/consultas",
  "/psi/consultas/",
  "/perfil",
  "/perfil/",
  "/psi/perfil",
  "/psi/perfil/",
];

const Header = () => {
  const isLoggedIn = useSelector((state) => state.login.token);
  const [width] = useWindowSize();
  const where = useLocation().pathname;

  const isDesktop = width >= 950;

  if (non_header_urls.some((e) => e === where)) return <></>;

  if (header_urls.some((e) => e === where) || start_with_urls.some((e) => where.startsWith(e))) {
    return isLoggedIn ? (
      isDesktop ? (
        <StyledHeader>
          <LeftLoggedHeader />
          <RightLoggedHeader />
        </StyledHeader>
      ) : (
        <StyledMobileHeader>
          <MobileStandardHeaderWithMenu />
        </StyledMobileHeader>
      )
    ) : isDesktop ? (
      <StyledHeader>
        <LeftNonLoggedHeader />
        <RightNonLoggedHeader />
      </StyledHeader>
    ) : (
      <StyledMobileHeader>
        <MobileStandardHeaderWithMenu />
      </StyledMobileHeader>
    );
  }

  return isDesktop ? (
    <StyledHeader>
      <LeftNonLoggedHeader />
      <RightNonLoggedHeader />
    </StyledHeader>
  ) : (
    <StyledMobileHeader>
      <MobileStandardHeaderWithMenu />
    </StyledMobileHeader>
  );
};

export default Header;
