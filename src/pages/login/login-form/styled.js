import styled from "styled-components";

import logo from "../assets/logo.svg";

export const Container = styled.div`
  background-color: #f3f3f3;
  width: ${(props) => (props.width < 950 ? "100%" : "40%")};
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
    width: ${(props) => (props.width < 450 ? "100%" : "100%")};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: 2fr 7fr;
    height: 40%;
  }

  .logo-holder {
    margin: ${(props) => (props.width > 550 ? "75px 95px" : "75px")};
    width: ${(props) => (props.width > 550 ? "350px" : "280px")};
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
    margin-bottom: 50px;
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
