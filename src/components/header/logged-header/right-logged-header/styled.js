import styled from "styled-components";

export const StyledRightLoggedHeader = styled.div`
  background-color: #70a3ef;
  width: auto;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-start;
  padding: 0 !important;

  div {
    margin-left: 15px;
    margin-right: 15px;
  }

  .profile {
    color: #f3f3f3;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
    margin-right: 30px;
    scale: 2;
  }

  .profile:hover {
    cursor: pointer;
    transition: 0.4s;
    scale: 1.5;
  }

  .links {
    height: 100%;
    color: #f3f3f3;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .links:hover {
    cursor: pointer;
    transition: 0.4s;
    scale: 0.8;
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
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;

  z-index: 2;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
`;
