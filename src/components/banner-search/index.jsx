import React from "react";
import { useHistory } from "react-router-dom";

import img_banner_search from "../../assets/img_banner_search.svg";
import {
  Container,
  ContainerSearch,
  ContainerBanner,
  BannerImg,
  Div,
  ButtonSearch,
  TitleSearch,
} from "./styled";

const BannerSearch = () => {
  const history = useHistory();

  return (
    <Container>
      <ContainerBanner>
        <BannerImg src={img_banner_search} />
      </ContainerBanner>
      <ContainerSearch>
        <Div>
          <TitleSearch>Encontre o psicólogo ideal pra você</TitleSearch>
          <ButtonSearch onClick={() => history.push("/buscar")}>Buscar Agora</ButtonSearch>
        </Div>
      </ContainerSearch>
    </Container>
  );
};

export default BannerSearch;
