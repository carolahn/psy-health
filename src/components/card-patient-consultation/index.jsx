import { Rate } from "antd";
import React from "react";
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
  const userId = useSelector((state) => state.login.user.id);
  const allAppointments = useSelector((state) => state.appointments.allAppointments);
  console.log(allAppointments);
  const FilterAppointmentsUser = () => {
    const AppointmentsUser = allAppointments.filter((appointment) => appointment.userId === userId);
    return AppointmentsUser;
  };

  const data = {
    userId: 12,
    id: 2,
    date: {
      start: "2020-10-21 13:00:00",
      end: "2020-10-21 14:00:00",
    },
    patient: {
      name: "Carolina Ahn",
      id: 12,
    },
    psic: {
      name: "Rodisval Pereira",
      id: 13,
    },
  };

  const dateUser = data.date.start.split(" ");

  return (
    <CardContainer>
      <ImgAndNameCardCotainer>
        <ImgDivCotainer>
          <PhotoPsychologist src={psic.image} />
        </ImgDivCotainer>
        <NameDivCotainer>
          <TitleForNameDateScheduleValueAndAvaliation>
            {psic.name}
          </TitleForNameDateScheduleValueAndAvaliation>
          <CrpDiv>{`CRP ${psic.crp}`}</CrpDiv>
          <Rate allowHalf defaultValue={psic.rating} style={{ fontSize: "14px" }} />
        </NameDivCotainer>
      </ImgAndNameCardCotainer>
      <DateScheduleAndValueContainer>
        <DateScheduleAndValue>
          <TitleForNameDateScheduleValueAndAvaliation>
            {window.innerWidth < 710 ? "Data" : "Data da Consulta"}
          </TitleForNameDateScheduleValueAndAvaliation>
          <TextStyle>{dateUser[0]}</TextStyle>
        </DateScheduleAndValue>
        <DateScheduleAndValue>
          <TitleForNameDateScheduleValueAndAvaliation>
            Horário
          </TitleForNameDateScheduleValueAndAvaliation>
          <TextStyle>{dateUser[1]}</TextStyle>
        </DateScheduleAndValue>
        <DateScheduleAndValue>
          <TitleForNameDateScheduleValueAndAvaliation>
            Valor
          </TitleForNameDateScheduleValueAndAvaliation>
          <TextStyle>{`R$ ${psic.price},00`}</TextStyle>
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

const psic = {
  email: "rodisval.psicologo@gmail.com",
  password: "$2a$10$4rN/ilBrjR94eNfQGpwpt.ksyf7Pttk2A2MlvjDdJWv6RaoR.5BR2",
  name: "Rodisval Pereira",
  is_psic: true,
  phone: "(41)98745-2365",
  "cpf-cnpj": "112.521.322.15",
  crp: "01/901292",
  price: "120",
  rating: "4.5",
  description:
    "Psicólogo Clinico, com especialização em experiência somática. Meu trabalho é fundamentado na análise de conteúdos inconscientes, com foco no autoconhecimento e na resolução de conflitos internos causadores de sofrimento, angústia, ansiedade, traumas, transtornos psicos e doenças psicossomáticas.",
  video: "https://www.youtube.com/embed/5qap5aO4i9A",
  language: "português, ingles, espanhol",
  academic_formation:
    "Graduação em Administração – Faculdade Dom Bosco – 2008 , Curso de Terapia de Casais - Universidade Paranaense – 2017, Curso de Experiência Somática - Associação Brasileira do Trauma – 2017, Graduação em Psicologia - Universidade Paranaense – 2019, Pós Graduação Piscoterapia Psicanalítica - Escola de Psicoterapia Psicanalítica de Maringá - em formação.",
  site: "https://www.google.com/",
  experience:
    "Angústia, Ansiedade, Autoestima, Depressão, Doenças Psicossomáticas, Síndrome do Pânico, Terapia de Casal/Casamento, Trauma",
  specializations: "psicologia infantil, psicologia de casais",
  image:
    "https://media.vittude.com/media/profile_photos/psicologo-jose-alan-martins-de-freitas_5MAeAhE.jpg",
  workDays: {
    1: [7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19],
    2: [],
    3: [7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19],
    4: [],
    5: [7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19],
  },
  id: 13,
  userId: 13,
};
