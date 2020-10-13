import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { deleteAppointment } from "../../redux/actions/appointments";
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
  const dispatch = useDispatch();
  const history = useHistory();
  const newAppointment = appointment.date.start.split(" ");
  const token = useSelector((state) => state.login.token);

  const Avaliation = false;
  let onePsi = "";

  const constructDate = () => {
    const partsDate = newAppointment[0].split("-");
    return `${partsDate[2]}/${partsDate[1]}/${partsDate[0]}`;
  };

  const constructHour = () => {
    const partsHour = newAppointment[1].split(":");
    return `${partsHour[0]}:${partsHour[1]}`;
  };

  const cancelAppointment = () => {
    dispatch(deleteAppointment(appointment.id, token));
  };

  const rescheduleAppointment = () => {
    dispatch(deleteAppointment(appointment.id, token));
    history.push(`/psi/agendamentos/${onePsi[0].id}`);
  };

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
                        <AvaliationButton onClick={() => console.log("avaliar")}>
                          Avaliar
                    </AvaliationButton>
                      </ContainerButtons>
                    )}
                </>
              )}
          </AvaliationOrButton>
        </CardContainer>
      )}
    </>
  );
};

export default CardPatientConsultation;
