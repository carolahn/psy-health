import React from "react";

import {
  Container,
  InfoTitleDiv,
  TitleInfo,
  InfoContainerDiv,
  InfoDiv,
  TitleInfoDiv,
  SearchIcon,
  CalendarIcon,
  VideoIcon,
} from "./styled";

const BannerOperation = () => {
  return (
    <Container>
      <InfoTitleDiv>
        <TitleInfo>Como funciona</TitleInfo>
      </InfoTitleDiv>
      <InfoContainerDiv>
        <InfoDiv>
          <TitleInfoDiv>Encontre um psicólogo</TitleInfoDiv>
          <div>
            <SearchIcon />
          </div>
        </InfoDiv>
        <InfoDiv>
          <TitleInfoDiv>Escolha a data que seja melhor pra você</TitleInfoDiv>
          <div>
            <CalendarIcon />
          </div>
        </InfoDiv>
        <InfoDiv>
          <TitleInfoDiv>Faça a sessão pelo computador ou celular</TitleInfoDiv>
          <div>
            <VideoIcon />
          </div>
        </InfoDiv>
      </InfoContainerDiv>
    </Container>
  );
};

export default BannerOperation;
