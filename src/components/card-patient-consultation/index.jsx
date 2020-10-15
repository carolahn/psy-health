import React from "react";

import Button from "../button";
import DepoimentsOpenModal from "../depoiments-open-modal";
import {
  CardContainer,
  ImgAndNameCardCotainer,
  DateScheduleAndValueContainer,
  AvaliationOrButton,
  ImgDivCotainer,
  NameDivCotainer,
  PhotoPsychologist,
  TitleForDateScheduleValueAndAvaliation,
  TitleForName,
  DateScheduleAndValue,
  CrpDiv,
  TextStyle,
  NewRate,
  RateAvaliation,
} from "./styled";

const CardPatientConsultation = ({
  avaliationExist,
  buttonOrAvaliation,
  cancelAppointment,
  constructDate,
  constructHour,
  onePsi,
  rescheduleAppointment,
  destiny,
  onClick,
  appointmentId,
}) => {
  return (
    onePsi.length > 0 && (
      <a href={destiny}>
        <CardContainer>
          <ImgAndNameCardCotainer>
            <ImgDivCotainer>
              <PhotoPsychologist src={onePsi[0].image} />
            </ImgDivCotainer>
            <NameDivCotainer>
              <TitleForName>{onePsi[0].name}</TitleForName>
              <CrpDiv>{`CRP: ${onePsi[0].crp}`}</CrpDiv>
              <NewRate allowHalf disabled defaultValue={onePsi[0].rating} />
            </NameDivCotainer>
          </ImgAndNameCardCotainer>
          <DateScheduleAndValueContainer>
            <DateScheduleAndValue>
              <TitleForDateScheduleValueAndAvaliation>Data</TitleForDateScheduleValueAndAvaliation>
              <TextStyle>{constructDate()}</TextStyle>
            </DateScheduleAndValue>
            <DateScheduleAndValue>
              <TitleForDateScheduleValueAndAvaliation>
                Horário
              </TitleForDateScheduleValueAndAvaliation>
              <TextStyle>{constructHour()}</TextStyle>
            </DateScheduleAndValue>
            <DateScheduleAndValue>
              <TitleForDateScheduleValueAndAvaliation>Valor</TitleForDateScheduleValueAndAvaliation>
              <TextStyle>{`R$ ${onePsi[0].price},00`}</TextStyle>
            </DateScheduleAndValue>
          </DateScheduleAndValueContainer>

          {buttonOrAvaliation ? (
            <AvaliationOrButton>
              <div>
                <Button
                  buttonName="Notificação"
                  width="88px"
                  height="30px"
                  fontSize="15px"
                  padding-bottom="20px"
                  onClick={onClick}
                />
              </div>
              <div>
                <Button
                  buttonName="Remarcar"
                  width="88px"
                  height="30px"
                  fontSize="15px"
                  padding-bottom="20px"
                  color="#9E9E9E"
                  colorHover="#9E9E9E"
                  colorActive="#9E9E9E"
                  onClick={rescheduleAppointment}
                />
              </div>
              <div>
                <Button
                  buttonName="Cancelar"
                  width="88px"
                  height="30px"
                  fontSize="15px"
                  color="#E16769"
                  colorHover="#E16769"
                  colorActive="#E16769"
                  onClick={cancelAppointment}
                />
              </div>
            </AvaliationOrButton>
          ) : (
              <>
                {avaliationExist ? (
                  <RateAvaliation>
                    <TitleForDateScheduleValueAndAvaliation>
                      Avaliação
                  </TitleForDateScheduleValueAndAvaliation>
                    <NewRate allowHalf disabled defaultValue={avaliationExist.grading} />
                  </RateAvaliation>
                ) : (
                    <DepoimentsOpenModal
                      appointId={appointmentId}
                      id={onePsi[0].id}
                      name={onePsi[0].name}
                    />
                  )}
              </>
            )}
        </CardContainer>
      </a>
    )
  );
};

export default CardPatientConsultation;
