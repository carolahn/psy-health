import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import { useWindowSize } from "../../hooks/index";
import Decor from "./login-art";
import LoginForm from "./login-form";
import { StyledUserLogin, StyledMobileLoginHeader, StyledMobileLogoHolder } from "./styled";

const login_urls = ["/login", "/login/", "/login/psi", "/login/psi/"];
const usr_urls = ["/login", "/login/"];
const psi_urls = ["/login/psi", "/login/psi/"];

export { login_urls, usr_urls, psi_urls };

const Login = () => {
  const where = useLocation().pathname;
  const history = useHistory();
  const [width] = useWindowSize();

  return (
    <>
      {width >= 950 && usr_urls.some((e) => e === where) ? (
        <StyledUserLogin>
          <LoginForm />
          <Decor />
        </StyledUserLogin>
      ) : width < 950 && usr_urls.some((e) => e === where) ? (
        <>
          <StyledMobileLoginHeader>
            <StyledMobileLogoHolder onClick={() => history.push("/")} />
          </StyledMobileLoginHeader>
          <LoginForm />
        </>
      ) : width >= 950 && psi_urls.some((e) => e === where) ? (
        <>
          <StyledUserLogin>
            <Decor />
            <LoginForm />
          </StyledUserLogin>
        </>
      ) : width < 950 && psi_urls.some((e) => e === where) ? (
        <>
          <StyledMobileLoginHeader>
            <StyledMobileLogoHolder onClick={() => history.push("/")} />
          </StyledMobileLoginHeader>
          <LoginForm />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Login;
