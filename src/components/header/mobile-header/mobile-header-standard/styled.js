import styled from "styled-components";

import logo from "../../assets/mobile-menu/logo-branco.png";

export const StyledMobileStandardHeaderWithMenu = styled.div`
  background-color: #70a3ef;
  width: 100%;
  height: 90px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;

  .logo {
    height: 50px;
    width: 126px;
    color: #f3f3f3;
    margin-left: 1rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    background-image: url(${logo});
    background-size: cover;
  }

  .logo:hover {
    cursor: pointer;
    transition: 0.4s;
    scale: 0.8;
  }

  .menu {
    width: 40px;
    height: 100%;
    color: #f3f3f3;
    margin-right: 1rem;
  }

  @keyframes sliding {
    from {
      height: 0;
    }
    to {
      height: 150px;
    }
  }

  .mobile-menu-list-whithout-token {
    animation: sliding 0.2s linear;
  }
`;

export const Container = styled.div`
  position: absolute;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
`;
