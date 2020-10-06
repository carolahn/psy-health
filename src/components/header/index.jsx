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
  "/register",
  "/register/",
  "/register/psi",
  "/register/psi/",
];
const header_urls = [
  "",
  "/",
  "/search",
  "/search/",
  "/psi",
  "/psi/",
  "/my-appointments",
  "/my-appointments/",
];
const urls = [...header_urls, ...non_header_urls];

const Header = () => {
  const token = useSelector((state) => state.login.token);
  const [width] = useWindowSize();
  const where = useLocation().pathname;

  return (
    <>
      {non_header_urls.some((e) => e === where) ? (
        <></>
      ) : header_urls.some((e) => e === where) || where.startsWith("/profile") ? (
        token ? (
          width >= 950 ? (
            <StyledHeader>
              <LeftLoggedHeader />
              <RightLoggedHeader />
            </StyledHeader>
          ) : (
              <StyledMobileHeader>
                <MobileStandardHeaderWithMenu token={token} />
              </StyledMobileHeader>
            )
        ) : width >= 950 ? (
          <StyledHeader>
            <LeftNonLoggedHeader />
            <RightNonLoggedHeader />
          </StyledHeader>
        ) : (
              <StyledMobileHeader>
                <MobileStandardHeaderWithMenu token={token} />
              </StyledMobileHeader>
            )
      ) : width >= 950 ? (
        <StyledHeader>
          <LeftNonLoggedHeader />
          <RightNonLoggedHeader />
        </StyledHeader>
      ) : (
              <StyledMobileHeader>
                <MobileStandardHeaderWithMenu token={token} />
              </StyledMobileHeader>
            )}
    </>
  );
};

export default Header;
