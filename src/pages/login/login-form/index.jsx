import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import styled from "styled-components";

import { usr_urls, psi_urls } from "../";
import { useWindowSize } from "../../../hooks/index";
import { Container } from "./styled";

const LoginForm = ({ email: [email, setEmail], password: [password, setPassword] }) => {
  const [width] = useWindowSize();
  const where = useLocation().pathname;
  const history = useHistory();

  const handleInputChange = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePasswordChange = ({ target: { value } }) => {
    setPassword(value);
  };

  return (
    <Container width={width}>
      {width > 950 ? (
        <div className="small-header">
          <div className="logo-holder" onClick={() => history.push("/")} />
        </div>
      ) : (
        <></>
      )}

      <div className="lower-form">
        <h1>Entrar</h1>

        <div className="login">
          <span
            className={usr_urls.some((e) => e === where) && "usr"}
            onClick={() => history.push("/login/usr")}>
            Sou Paciente
          </span>
          <span
            className={psi_urls.some((e) => e === where) && "psi"}
            onClick={() => history.push("/login/psi")}>
            Sou Psicólogo
          </span>
        </div>

        <div className="form-holder">
          <form>
            <input type="email" placeholder="E-mail" value={email} onChange={handleInputChange} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              className="submit-button">
              Entrar
            </button>
          </form>
          <span className="register">
            Não é cadastrado?{" "}
            <span
              className="link-register"
              onClick={() => {
                usr_urls.some((e) => e === where) && history.push("/register/usr");
                psi_urls.some((e) => e === where) && history.push("/register/psi");
              }}>
              Crie sua conta!
            </span>
          </span>
        </div>
      </div>
    </Container>
  );
};

export default LoginForm;
