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
  TitleForNameDateScheduleValueAndAvaliation,
  DateScheduleAndValue,
  CrpDiv,
  TextStyle,
  NewRate,
} from "./styled";

const CardPatientConsultation = ({
  avaliationExist,
  buttonOrAvaliation,
  cancelAppointment,
  constructDate,
  constructHour,
  onePsi,
  rescheduleAppointment,
}) => {
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
            <>
              <div>
                <Button
                  buttonName="Remarcar"
                  width="100px"
                  height="30px"
                  fontSize="16px"
                  padding-bottom="20px"
                  color="#9E9E9E"
                  colorHover="#9E9E9E"
                  colorActive="#9E9E9E"
                  onClick={rescheduleAppointment}
                />
              </div>
              <div>
                <Button
                  buttonName="Notificação"
                  width="100px"
                  height="30px"
                  fontSize="16px"
                  padding-bottom="20px"
                  onClick={() => console.log("notificar")}
                />
              </div>
              <div>
                <Button
                  buttonName="Cancelar"
                  width="100px"
                  height="30px"
                  fontSize="16px"
                  color="#E16769"
                  colorHover="#E16769"
                  colorActive="#E16769"
                  onClick={cancelAppointment}
                />
              </div>
            </>
          ) : (
              <>
                {avaliationExist ? (
                  <>
                    <TitleForNameDateScheduleValueAndAvaliation>
                      Avaliação
                  </TitleForNameDateScheduleValueAndAvaliation>
                    <NewRate allowHalf disabled defaultValue={5} />
                  </>
                ) : (
                    <>
                      <DepoimentsOpenModal id={onePsi[0].id} name={onePsi[0].name} />
                    </>
                  )}
              </>
            )}
        </AvaliationOrButton>
      </CardContainer>
    )
  );
};

export default CardPatientConsultation;
