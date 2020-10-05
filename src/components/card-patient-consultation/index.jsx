import { Rate } from "antd";
import React from "react";

import {
  CardContainer,
  ImgAndNameCardCotainer,
  DateScheduleAndValueContainer,
  AvaliationOrButton,
  ImgDivCotainer,
  NameDivCotainer,
  PhotoPsychologist,
  TitleForNameDateScheduleValueAndAvaliation,
  DateScheduleAndValue,
  CrpDiv,
  TextStyle,
} from "./styled";

const CardPatientConsultation = () => {
  return (
    <CardContainer>
      <ImgAndNameCardCotainer>
        <ImgDivCotainer>
          <PhotoPsychologist src="https://image.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg" />
        </ImgDivCotainer>
        <NameDivCotainer>
          <TitleForNameDateScheduleValueAndAvaliation>
            Juliano Ferreira Souza
          </TitleForNameDateScheduleValueAndAvaliation>
          <CrpDiv>CRP 10542/20</CrpDiv>
          <Rate allowHalf defaultValue={5} style={{ fontSize: "14px" }} />
        </NameDivCotainer>
      </ImgAndNameCardCotainer>
      <DateScheduleAndValueContainer>
        <DateScheduleAndValue>
          <TitleForNameDateScheduleValueAndAvaliation>
            {window.innerWidth < 710 ? "Data" : "Data da Consulta"}
          </TitleForNameDateScheduleValueAndAvaliation>
          <TextStyle>25/10/20</TextStyle>
        </DateScheduleAndValue>
        <DateScheduleAndValue>
          <TitleForNameDateScheduleValueAndAvaliation>
            Horário
          </TitleForNameDateScheduleValueAndAvaliation>
          <TextStyle>10:00</TextStyle>
        </DateScheduleAndValue>
        <DateScheduleAndValue>
          <TitleForNameDateScheduleValueAndAvaliation>
            Valor
          </TitleForNameDateScheduleValueAndAvaliation>
          <TextStyle>R$ 100,00</TextStyle>
        </DateScheduleAndValue>
      </DateScheduleAndValueContainer>
      <AvaliationOrButton>
        <TitleForNameDateScheduleValueAndAvaliation>
          Avaliação
        </TitleForNameDateScheduleValueAndAvaliation>
        <Rate allowHalf defaultValue={5} style={{ fontSize: "16px" }} />
      </AvaliationOrButton>
    </CardContainer>
  );
};

export default CardPatientConsultation;
