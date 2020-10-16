import styled from "styled-components";

export const RegisterContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;

  @media (max-width: 945px) {
    display: block;
    height: auto;
    margin: 20px 0;
  }
`;

export const SideContainer = styled.div`
  width: 60%;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: #f3f3f3;

  @media (max-width: 945px) {
    display: grid;
    place-items: center;
    width: 100%;
  }

  .small-header {
    justify-content: center;
    align-items: center;

    display: grid;
    grid-template-columns: 2fr 7fr;
    background-color: #f3f3f3;

    img {
      margin: 75px 95px;
      width: 212px;
      height: 84px;

      cursor: pointer;

      @media (max-height: 700px) {
        margin: 15px 60px;
      }
    }

    @media (max-width: 945px) {
      display: none;
    }
  }

  .lower-form {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    h1 {
      color: #053559;
      font-size: 44px;
      margin: 0;
    }

    .changeToPsic {
      color: rgba(0, 0, 0, 0.4);
      font-size: 1.2rem;
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 0.6rem;

      span {
        cursor: pointer;
        margin: 0;
      }

      .usr,
      .psi {
        color: #70a3ef;
        cursor: pointer;
        font-weight: normal;
      }
    }

    .form-holder {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
    }
  }

  .changePage {
    justify-self: center;
    align-self: center;
    width: 300px;
    color: rgba(0, 0, 0, 0.4);
    font-size: 1rem;
    text-align: center;
    margin: 0 0 10px 0;

    span {
      color: #70a3ef;
      cursor: pointer;
      margin: 10px;
    }
  }
`;
