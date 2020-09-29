import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import styled from "styled-components";

import { usr_urls, psi_urls } from "../";
import logo from "../assets/logo.svg";

const LoginForm = ({ email: [email, setEmail], password: [password, setPassword] }) => {
  const where = useLocation().pathname;
  const history = useHistory();

  const handleInputChange = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePasswordChange = ({ target: { value } }) => {
    setPassword(value);
  };

  return (
    <Container>
      <div className="small-header">
        <div className="logo-holder" onClick={() => history.push("/")} />
      </div>

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

const Container = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  h1 {
    color: #053559;
    font-size: 44px;
  }

  span {
    margin: 10px;
  }

  .small-header {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: 2fr 7fr;
    height: 50%;
  }

  .logo-holder {
    margin: 75px 95px;
    width: 350px;
    height: 100px;
    background-image: url(${logo});
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: contain;
    align-self: flex-start;
  }

  .lower-form {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .login {
    color: rgba(0, 0, 0, 0.4);
    font-size: 1.2rem;
    margin: 1.5rem;

    span {
      cursor: pointer;
    }

    .usr,
    .psi {
      color: #70a3ef;
      cursor: pointer;
      font-weight: normal;
    }
  }

  .form-holder {
    width: 40%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }

  form {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }

  input {
    height: 35px;
    border: 2px solid #70a3ef;
    border-radius: 5px;
    padding-left: 0.2rem;
    margin: 15px;
    width: 300px;
  }

  .submit-button {
    width: 150px;
    height: 40px;
    color: #fff;
    background-color: #053559;
    border-radius: 5px;
    margin: 10px;
  }

  .register {
    justify-self: center;
    align-self: center;
    width: 300px;
    color: rgba(0, 0, 0, 0.4);
    font-size: 1rem;
    text-align: center;
    margin: 20px;

    span {
      color: #70a3ef;
      cursor: pointer;
    }
  }
`;
