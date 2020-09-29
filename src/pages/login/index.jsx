import React, { useState, useEffect } from "react";
import styled from "styled-components";

import gbcgrnd from "./assets/kurvaE.svg";
import bcgrndi from "./assets/loginE.svg";
import logo from "./assets/logo.svg";

const Login = () => {
  const [width] = useWindowSize();
  const [email, setEmail] = useState("");

  const handleChange = ({ target: { value } }) => {
    setEmail(value);
  };

  return (
    <>
      {width > 950 ? (
        <StyledUserLogin>
          <div className="left">
            <div className="small-header">
              <div className="logo-holder" />
            </div>

            <div className="lower-left">
              <h1>Entrar</h1>

              <div className="">
                <span>Sou Paciente</span>
                <span>Sou Psicólogo</span>
              </div>

              <div className="form-holder">
                <form>
                  <input placeholder="E-mail" value={email} onChange={handleChange} />
                  <input type="password" placeholder="Password" />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="submit-button">
                    Entrar
                  </button>
                </form>
                <span>
                  Não é cadastrado? <a>Crie sua conta!</a>
                </span>
              </div>
            </div>
          </div>

          <div className="semi-bcgrnd-holder">
            <div className="pic-holder" />
          </div>
        </StyledUserLogin>
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
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
  align-items: center;

  h1 {
    color: #053559;
    font-size: 44px;
  }

  span {
    margin: 10px;
  }

  .left {
    width: 40%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
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

  .lower-left {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .form-holder {
    width: 40%;
    /* height: 100%; */
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
    border: 2px solid #053559b3;
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

  .semi-bcgrnd-holder {
    width: 60%;
    height: 100%;
    background-image: url(${gbcgrnd});
    background-size: cover;
    display: grid;
    grid-template-columns: 1fr 7fr;
    grid-template-rows: 1fr 1fr 7fr 1fr;
  }

  .pic-holder {
    background-image: url(${bcgrndi});
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
