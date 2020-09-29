import styled from "styled-components";

import gbcgrndD from "./assets/kurvaD.svg";
import gbcgrndE from "./assets/kurvaE.svg";
import bcgrndiD from "./assets/loginD.svg";
import bcgrndiE from "./assets/loginE.svg";

export const StyledUserLogin = styled.div`
  background-color: #f3f3f3;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
  align-items: center;

  .semi-bcgrnd-holder-right {
    width: 60%;
    height: 100%;
    object-fit: cover;
    background-image: url(${gbcgrndE});
    background-size: cover;
    display: grid;
    grid-template-columns: 1fr 7fr;
    grid-template-rows: 1fr 1fr 7fr 1fr;
  }

  .pic-holder-right {
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

  .semi-bcgrnd-holder-left {
    width: 60%;
    height: 100%;
    object-fit: cover;
    background-image: url(${gbcgrndD});
    background-size: cover;
    display: grid;
    grid-template-columns: 7fr 1fr;
    grid-template-rows: 1fr 1fr 7fr 1fr;
  }

  .pic-holder-left {
    background-image: url(${bcgrndiD});
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: contain;
    scale: 0.7;
    grid-column: 1/2;
    grid-row: 3/4;
  }
`;
