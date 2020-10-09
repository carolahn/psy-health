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
  ContainerButtons,
  CancelButton,
  RescheduleButton,
  AvaliationButton,
} from "./styled";

const CardPatientConsultation = ({ psiList, appointment, buttonOrAvaliation }) => {
  const newAppointment = appointment.date.start.split(" ");
  const dateAppointment = newAppointment[0];
  const hourAppointment = newAppointment[1];
  let onePsi = "";

  const filterPsicUser = (appointment) => {
    onePsi = psiList.filter((psi) => psi.id === appointment.psic.id);
  };

  filterPsicUser(appointment);

  return (
    <>
      {onePsi.length > 0 && (
        <CardContainer>
          <ImgAndNameCardCotainer>
            <ImgDivCotainer>
              <PhotoPsychologist src={onePsi[0].image} />
            </ImgDivCotainer>
            <NameDivCotainer>
              <TitleForNameDateScheduleValueAndAvaliation>
                {onePsi[0].name}
              </TitleForNameDateScheduleValueAndAvaliation>
              <CrpDiv>{`CRP: ${onePsi[0].crp}`}</CrpDiv>
              <NewRate allowHalf defaultValue={onePsi[0].rating} />
            </NameDivCotainer>
          </ImgAndNameCardCotainer>
          <DateScheduleAndValueContainer>
            <DateScheduleAndValue>
              <TitleForNameDateScheduleValueAndAvaliation>
                Data
              </TitleForNameDateScheduleValueAndAvaliation>
              <TextStyle>{dateAppointment}</TextStyle>
            </DateScheduleAndValue>
            <DateScheduleAndValue>
              <TitleForNameDateScheduleValueAndAvaliation>
                Horário
              </TitleForNameDateScheduleValueAndAvaliation>
              <TextStyle>{hourAppointment}</TextStyle>
            </DateScheduleAndValue>
            <DateScheduleAndValue>
              <TitleForNameDateScheduleValueAndAvaliation>
                Valor
              </TitleForNameDateScheduleValueAndAvaliation>
              <TextStyle>{`R$ ${onePsi[0].price},00`}</TextStyle>
            </DateScheduleAndValue>
          </DateScheduleAndValueContainer>
          <AvaliationOrButton>
            {buttonOrAvaliation ? (
              <ContainerButtons>
                <RescheduleButton>Remarcar</RescheduleButton>
                <CancelButton>Cancel</CancelButton>
                <AvaliationButton>Avaliar</AvaliationButton>
              </ContainerButtons>
            ) : (
                <>
                  <TitleForNameDateScheduleValueAndAvaliation>
                    Avaliação
                </TitleForNameDateScheduleValueAndAvaliation>
                  <NewRate allowHalf defaultValue={5} />
                </>
              )}
          </AvaliationOrButton>
        </CardContainer>
      )}
    </>
  );
};

export default CardPatientConsultation;
