import { Rate } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
        <ImgDivCotainer>{/* <PhotoPsychologist src={oneUser.image} /> */}</ImgDivCotainer>
        <NameDivCotainer>
          <TitleForNameDateScheduleValueAndAvaliation>
            {/* {oneUser.name} */}
          </TitleForNameDateScheduleValueAndAvaliation>
          {/* <CrpDiv>{`CRP ${oneUser.crp}`}</CrpDiv> */}
          {/* <Rate allowHalf defaultValue={oneUser.rating} style={{ fontSize: "14px" }} /> */}
        </NameDivCotainer>
      </ImgAndNameCardCotainer>
      <DateScheduleAndValueContainer>
        <DateScheduleAndValue>
          <TitleForNameDateScheduleValueAndAvaliation>
            {window.innerWidth < 710 ? "Data" : "Data da Consulta"}
          </TitleForNameDateScheduleValueAndAvaliation>
          {/* <TextStyle>{dateUser[0]}</TextStyle> */}
        </DateScheduleAndValue>
        <DateScheduleAndValue>
          <TitleForNameDateScheduleValueAndAvaliation>
            Horário
          </TitleForNameDateScheduleValueAndAvaliation>
          {/* <TextStyle>{dateUser[1]}</TextStyle> */}
        </DateScheduleAndValue>
        <DateScheduleAndValue>
          <TitleForNameDateScheduleValueAndAvaliation>
            Valor
          </TitleForNameDateScheduleValueAndAvaliation>
          {/* <TextStyle>{`R$ ${oneUser.price},00`}</TextStyle> */}
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
