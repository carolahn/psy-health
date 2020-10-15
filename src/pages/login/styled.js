import styled from "styled-components";

import logo from "./assets/logo-azul.png";

export const StyledUserLogin = styled.div`
  background-color: #f3f3f3;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
  align-items: center;
`;

export const StyledMobileLoginHeader = styled.div`
  background-color: #f3f3f3;
  width: 100%;
  height: 150px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

export const StyledMobileLogoHolder = styled.div`
  background-color: #f3f3f3;
  width: 212px;
  height: 84px;
  background-image: url(${logo});
  background-size: cover;
  cursor: pointer;
`;
