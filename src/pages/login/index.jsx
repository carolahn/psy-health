import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { useWindowSize } from "../../hooks/index";
import LoginForm from "./login-form";
import { StyledUserLogin } from "./styled";

const login_urls = ["/login/usr", "/login/usr/", "/login/psi", "/login/psi/"];
const usr_urls = ["/login/usr", "/login/usr/"];
const psi_urls = ["/login/psi", "/login/psi/"];

export { login_urls, usr_urls, psi_urls };

const Login = () => {
  const where = useLocation().pathname;
  const [width] = useWindowSize();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {}, [email]);

  return (
    <>
      {width >= 950 && usr_urls.some((e) => e === where) ? (
        <StyledUserLogin>
          <LoginForm email={[email, setEmail]} password={[password, setPassword]} />

          <div className="semi-bcgrnd-holder-right">
            <div className="pic-holder-right" />
          </div>
        </StyledUserLogin>
      ) : width < 950 && usr_urls.some((e) => e === where) ? (
        <>
          <LoginForm email={[email, setEmail]} password={[password, setPassword]} />
        </>
      ) : width >= 950 && psi_urls.some((e) => e === where) ? (
        <>
          <StyledUserLogin>
            <div className="semi-bcgrnd-holder-left">
              <div className="pic-holder-left" />
            </div>
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
