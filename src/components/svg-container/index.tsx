import React from "react";
import styled from "styled-components";

import Curva from "../../assets/imgs/curva.svg";

interface SvgContainerProps {
  svgExtra: string;
  esquerda?: boolean;
}

interface TransformContainer {
  esquerda: boolean;
}

const SvgContainer = ({ svgExtra, esquerda = false }: SvgContainerProps) => {
  return (
    <Container esquerda={esquerda}>
      <img src={Curva} alt="Curva" />
      <div>
        <img src={svgExtra} alt="svgExtra" />
      </div>
    </Container>
  );
};

export default SvgContainer;

const Container = styled.div`
  background-color: #70a3ef;

  transform: ${({ esquerda }: TransformContainer) => (esquerda ? "rotateY(180deg)" : "none")};

  width: 100%;
  display: grid;
  grid-template-columns: 1fr minmax(300px, 100%);

  > img {
    height: 100vh;
  }

  div {
    display: grid;
    place-items: center;

    padding: calc(10px + 10%);

    img {
      width: 100%;
    }
  }

  @media (max-width: 945px) {
    display: none;
  }
`;
