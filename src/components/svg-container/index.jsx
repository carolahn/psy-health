import React from "react";
import styled from "styled-components";

import Curva from "../../assets/imgs/curva.svg";

const SvgContainer = ({ svgExtra, esquerda = false }) => {
  return !esquerda ? (
    <ContainerDireita>
      <img src={Curva} alt="Curva" />
      <div>
        <img src={svgExtra} alt="svgExtra" />
      </div>
    </ContainerDireita>
  ) : (
    <ContainerEsquerda>
      <img src={Curva} alt="Curva" />
      <div>
        <img src={svgExtra} alt="svgExtra" />
      </div>
    </ContainerEsquerda>
  );
};

export default SvgContainer;

const Container = styled.div`
  background-color: #70a3ef;

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

const ContainerDireita = styled(Container)``;

const ContainerEsquerda = styled(Container)`
  transform: rotateY(180deg);
`;
