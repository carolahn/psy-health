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
  NewRate,
} from "./styled";

const CardPatientConsultation = ({ oneUser, appointment }) => {
  const dateAppointment = appointment.date.start.split(" ");

  const compareDates = (dateAppointment) => {
    const parts = dateAppointment[0].split("-");
    const today = new Date();

    dateAppointment = new Date(parts[0], parts[1] - 1, parts[2]);
    return console.log(dateAppointment >= today);
  };

  compareDates(dateAppointment);

  return (
    <CardContainer>
      <ImgAndNameCardCotainer>
        <ImgDivCotainer>
          <PhotoPsychologist src={oneUser.image} />
        </ImgDivCotainer>
        <NameDivCotainer>
          <TitleForNameDateScheduleValueAndAvaliation>
            {oneUser.name}
          </TitleForNameDateScheduleValueAndAvaliation>
          <CrpDiv>{`CRP: ${oneUser.crp}`}</CrpDiv>
          <NewRate allowHalf defaultValue={oneUser.rating} />
        </NameDivCotainer>
      </ImgAndNameCardCotainer>
      <DateScheduleAndValueContainer>
        <DateScheduleAndValue>
          <TitleForNameDateScheduleValueAndAvaliation>
            Data
          </TitleForNameDateScheduleValueAndAvaliation>
          <TextStyle>{dateAppointment[0]}</TextStyle>
        </DateScheduleAndValue>
        <DateScheduleAndValue>
          <TitleForNameDateScheduleValueAndAvaliation>
            Horário
          </TitleForNameDateScheduleValueAndAvaliation>
          <TextStyle>{dateAppointment[1]}</TextStyle>
        </DateScheduleAndValue>
        <DateScheduleAndValue>
          <TitleForNameDateScheduleValueAndAvaliation>
            Valor
          </TitleForNameDateScheduleValueAndAvaliation>
          <TextStyle>{`R$ ${oneUser.price},00`}</TextStyle>
        </DateScheduleAndValue>
      </DateScheduleAndValueContainer>
      <AvaliationOrButton>
        <TitleForNameDateScheduleValueAndAvaliation>
          Avaliação
        </TitleForNameDateScheduleValueAndAvaliation>
        <NewRate allowHalf defaultValue={5} />
      </AvaliationOrButton>
    </CardContainer>
  );
};

export default CardPatientConsultation;
