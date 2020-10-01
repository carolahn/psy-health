import styled from "styled-components";

export const StyledRightLoggedHeader = styled.div`
  background-color: #70a3ef;
  width: auto;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-start;

  div {
    margin-left: 15px;
    margin-right: 15px;
  }

  .perfil {
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .links {
    height: 100%;
    color: #f3f3f3;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .links:hover {
    transition: 0.4s;
    scale: 0.8;
  }
`;
