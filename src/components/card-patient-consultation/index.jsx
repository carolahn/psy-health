import React from "react";

import DepoimentsOpenModal from "../depoiments-open-modal";
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
} from "./styled";

const CardPatientConsultation = ({
  buttonOrAvaliation,
  onePsi,
  constructDate,
  constructHour,
  cancelAppointment,
  rescheduleAppointment,
}) => {
  const Avaliation = false;

  return (
    onePsi.length > 0 && (
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
            <NewRate allowHalf disabled defaultValue={onePsi[0].rating} />
          </NameDivCotainer>
        </ImgAndNameCardCotainer>
        <DateScheduleAndValueContainer>
          <DateScheduleAndValue>
            <TitleForNameDateScheduleValueAndAvaliation>
              Data
            </TitleForNameDateScheduleValueAndAvaliation>
            <TextStyle>{constructDate()}</TextStyle>
          </DateScheduleAndValue>
          <DateScheduleAndValue>
            <TitleForNameDateScheduleValueAndAvaliation>
              Horário
            </TitleForNameDateScheduleValueAndAvaliation>
            <TextStyle>{constructHour()}</TextStyle>
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
              <RescheduleButton onClick={rescheduleAppointment}>Remarcar</RescheduleButton>
              <CancelButton onClick={cancelAppointment}>Cancelar</CancelButton>
            </ContainerButtons>
          ) : (
            <>
              {Avaliation ? (
                <>
                  <TitleForNameDateScheduleValueAndAvaliation>
                    Avaliação
                  </TitleForNameDateScheduleValueAndAvaliation>
                  <NewRate allowHalf disabled defaultValue={5} />
                </>
              ) : (
                <ContainerButtons>
                  <DepoimentsOpenModal id={onePsi[0].id} name={onePsi[0].name} />
                </ContainerButtons>
              )}
            </>
          )}
        </AvaliationOrButton>
      </CardContainer>
    )
  );
};

export default CardPatientConsultation;
