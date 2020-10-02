import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useWindowSize } from "../../hooks/index";
import Decor from "./login-art";
import LoginForm from "./login-form";
import { StyledUserLogin } from "./styled";

const login_urls = ["/login", "/login/", "/login/psi", "/login/psi/"];
const usr_urls = ["/login", "/login/"];
const psi_urls = ["/login/psi", "/login/psi/"];

export { login_urls, usr_urls, psi_urls };

const Login = () => {
  const where = useLocation().pathname;
  const [width] = useWindowSize();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      {width >= 950 && usr_urls.some((e) => e === where) ? (
        <StyledUserLogin>
          <LoginForm email={[email, setEmail]} password={[password, setPassword]} />
          <Decor />
        </StyledUserLogin>
      ) : width < 950 && usr_urls.some((e) => e === where) ? (
        <>
          <LoginForm email={[email, setEmail]} password={[password, setPassword]} />
        </>
      ) : width >= 950 && psi_urls.some((e) => e === where) ? (
        <>
          <StyledUserLogin>
            <Decor />
            <LoginForm email={[email, setEmail]} password={[password, setPassword]} />
          </StyledUserLogin>
        </>
      ) : width < 950 && psi_urls.some((e) => e === where) ? (
        <>
          <LoginForm email={[email, setEmail]} password={[password, setPassword]} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Login;
