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
                  title="Remarcar"
                  width="100px"
                  height="30px"
                  fontSize="16px"
                  padding-bottom="20px"
                  onClick={rescheduleAppointment}
                />
              </div>
              <div>
                <Button
                  title="Cancelar"
                  width="100px"
                  height="30px"
                  fontSize="16px"
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
