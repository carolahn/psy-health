import { Tooltip } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

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
  href,
  appointmentId,
  consultationStart,
}) => {
  const history = useHistory();
  return (
    onePsi.length > 0 && (
      <CardContainer
        style={
          consultationStart ? { border: "2px solid #116611" } : { border: "2px solid #70a3ef" }
        }>
        <div onClick={() => history.push(`/psi/agendamentos/${onePsi[0].id}`)}>
          <ImgAndNameCardCotainer>
            <ImgDivCotainer>
              <PhotoPsychologist src={onePsi[0].image} />
            </ImgDivCotainer>
            <NameDivCotainer>
              <TitleForName>
                <Tooltip title={onePsi[0].name} color="#70a3ef">
                  {onePsi[0].name}
                </Tooltip>
              </TitleForName>
              <CrpDiv>{`CRP: ${onePsi[0].crp}`}</CrpDiv>
              <NewRate allowHalf disabled defaultValue={onePsi[0].rating} />
            </NameDivCotainer>
          </ImgAndNameCardCotainer>
        </div>
        <div onClick={() => history.push(`/psi/agendamentos/${onePsi[0].id}`)}>
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
        </div>
        {buttonOrAvaliation ? (
          <AvaliationOrButton>
            {consultationStart ? (
              <a href={href}>
                <Button
                  buttonName="Hora da consulta"
                  width="150px"
                  height="40px"
                  fontSize="16px"
                  color="#116611"
                  colorHover="#004400"
                  colorActive="#55aa55"
                  padding-bottom="20px"
                />
              </a>
            ) : (
                <>
                  <div>
                    <Button
                      buttonName="Remarcar"
                      width="100px"
                      height="35px"
                      fontSize="16px"
                      padding-bottom="20px"
                      color="#9e9e9e"
                      colorHover="#3b3a3a"
                      colorActive="#c9c9c9"
                      onClick={rescheduleAppointment}
                    />
                  </div>
                  <div>
                    <Button
                      buttonName="Cancelar"
                      width="100px"
                      height="35px"
                      fontSize="16px"
                      color="#e16769"
                      colorHover="#9a1e21"
                      colorActive="#fd9a9d"
                      onClick={cancelAppointment}
                    />
                  </div>
                </>
              )}
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
    )
  );
};

export default CardPatientConsultation;
