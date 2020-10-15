import React from "react";
import { useHistory } from "react-router-dom";

import img_banner_search from "../../assets/img_banner_search.svg";
import Button from "../button";
import { Container, ContainerSearch, ContainerBanner, BannerImg, Div, TitleSearch } from "./styled";

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
          <Button
            width="200px"
            height="60px"
            title="Buscar"
            onClick={() => history.push("/buscar")}
          />
        </Div>
      </ContainerSearch>
    </Container>
  );
};

export default BannerSearch;
