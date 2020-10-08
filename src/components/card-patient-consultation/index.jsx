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
  CancelButton,
  RescheduleButton,
} from "./styled";

const CardPatientConsultation = ({ allUsers, appointment, buttonOrAvaliation }) => {
  const newAppointment = appointment.date.start.split(" ");
  const dateAppointment = newAppointment[0];
  const hourAppointment = newAppointment[1];
  let oneUser = "";

  const filterPsicUser = (appointment) => {
    oneUser = allUsers.filter((user) => user.id === appointment.psic.id);
  };

  filterPsicUser(appointment);

  return (
    <>
      {oneUser.length > 0 && (
        <CardContainer>
          <ImgAndNameCardCotainer>
            <ImgDivCotainer>
              <PhotoPsychologist src={oneUser[0].image} />
            </ImgDivCotainer>
            <NameDivCotainer>
              <TitleForNameDateScheduleValueAndAvaliation>
                {oneUser[0].name}
              </TitleForNameDateScheduleValueAndAvaliation>
              <CrpDiv>{`CRP: ${oneUser[0].crp}`}</CrpDiv>
              <NewRate allowHalf defaultValue={oneUser[0].rating} />
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
              <TextStyle>{`R$ ${oneUser[0].price},00`}</TextStyle>
            </DateScheduleAndValue>
          </DateScheduleAndValueContainer>
          <AvaliationOrButton>
            {buttonOrAvaliation ? (
              <>
                <RescheduleButton>Remarcar</RescheduleButton>
                <CancelButton>Cancel</CancelButton>
              </>
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
