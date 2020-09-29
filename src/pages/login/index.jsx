import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import gbcgrndD from "./assets/kurvaD.svg";
import gbcgrndE from "./assets/kurvaE.svg";
import bcgrndiD from "./assets/loginD.svg";
import bcgrndiE from "./assets/loginE.svg";
import logo from "./assets/logo.svg";
import LoginForm from "./login-form";

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

          <div className="semi-bcgrnd-holder">
            <div className="pic-holder" />
          </div>
        </StyledUserLogin>
      ) : width < 950 && usr_urls.some((e) => e === where) ? (
        <>
          <LoginForm email={[email, setEmail]} password={[password, setPassword]} />
        </>
      ) : width >= 950 && psi_urls.some((e) => e === where) ? (
        <></>
      ) : width < 950 && psi_urls.some((e) => e === where) ? (
        <></>
      ) : (
        <></>
      )}
    </>
  );
};

export default Login;

const StyledUserLogin = styled.div`
  background-color: #d5d5d5;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
  align-items: center;

  .semi-bcgrnd-holder {
    width: 60%;
    height: 100%;
    object-fit: cover;
    background-image: url(${gbcgrndE});
    background-size: cover;
    display: grid;
    grid-template-columns: 1fr 7fr;
    grid-template-rows: 1fr 1fr 7fr 1fr;
  }

  .pic-holder {
    background-image: url(${bcgrndiE});
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: contain;
    scale: 0.7;
    grid-column: 2/3;
    grid-row: 3/4;
  }
`;

function useWindowSize() {
  const [windowSize, setWindowSize] = useState([0, 0]);

  useEffect(() => {
    function handleResize() {
      setWindowSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

// 950px
