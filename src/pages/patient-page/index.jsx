import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardPatientConsultation from "../../components/card-patient-consultation";
import { getAppointments } from "../../redux/actions/appointments";
import { getOneUser } from "../../redux/actions/users";
import { ContainerCards, TitleContainerAppointments, TitleContainerHistory } from "./styled";

const PatientPage = () => {
  const [psic, setPsic] = useState([]);
  const [buttonOrAvaliation, setButtonOrAvaliation] = useState(false);

  const dispatch = useDispatch();

  const userId = useSelector((state) => state.login.user.id);
  const user = useSelector((state) => state.login.user);
  //const allAppointments = useSelector((state) => state.appointments.allAppointments);
  //const allUsers = useSelector((state) => state.users.allUsers);
  console.log(user);
  // useEffect(() => {
  //   if (allAppointments.length > 0) {
  //     filterAppointmentsUser();
  //   }
  // }, [allAppointments]);

  // const filterPsicUser = (appointment) => {
  //   setPsic(allUsers.filter((user) => user.id === appointment.psic.id));
  // };

  const compareDates = (dateAppointment) => {
    const parts = dateAppointment[0].split("-");
    const today = new Date();

    dateAppointment = new Date(parts[0], parts[1] - 1, parts[2]);
    return dateAppointment >= today;
  };

  const constructCardWithButtons = (appointment, index) => {
    //filterPsicUser(appointment);

    return (
      <CardPatientConsultation
        key={index}
        buttonOrAvaliation={!buttonOrAvaliation}
        allUsers={allUsers}
        appointment={appointment}
      />
    );
  };

  const constructCardWithAvaliation = (appointment, index) => {
    //filterPsicUser(appointment);

    return (
      <CardPatientConsultation
        key={index}
        buttonOrAvaliation={buttonOrAvaliation}
        allUsers={allUsers}
        appointment={appointment}
      />
    );
  };

  return (
    <ContainerCards>
      <TitleContainerAppointments>Consultas Agendadas</TitleContainerAppointments>
      {allAppointments &&
        Object.values(allAppointments)
          .filter((appointment) => appointment.userId === userId)
          .map(
            (appointment, index) =>
              compareDates(appointment.date.start.split(" ")) &&
              constructCardWithButtons(appointment, index)
          )}
      <TitleContainerHistory>Histórico de Consultas</TitleContainerHistory>
      {allAppointments &&
        Object.values(allAppointments)
          .filter((appointment) => appointment.userId === userId)
          .map((appointment, index) =>
            compareDates(appointment.date.start.split(" "))
              ? null
              : constructCardWithAvaliation(appointment, index)
          )}
    </ContainerCards>
  );
};

export default PatientPage;

const allUsers = [
  {
    email: "joanacmota@gmail.com",
    password: "$2a$10$f6G8y01Ag4h/WdOlDPMLCOS02Ngnh/ncZFNB6UkP.9purvPRuuhFu",
    name: "Joana Camargo Mota",
    is_psic: true,
    phone: "(41)97649-8798",
    cpf_cnpj: "885.443.123-23",
    crp: "01/74521",
    price: "90",
    rating: "4.5",
    description:
      "Psicóloga Clinica, com especialização em experiência somática. Meu trabalho é fundamentado na análise de conteúdos inconscientes, com foco no autoconhecimento e na resolução de conflitos internos causadores de sofrimento, angústia, ansiedade, traumas, transtornos psicos e doenças psicossomáticas.",
    video: "https://www.youtube.com/embed/5qap5aO4i9A",
    language: "português",
    academic_formation:
      "Graduação em Administração – Faculdade Dom Bosco – 2008 , Curso de Terapia de Casais - Universidade Paranaense – 2017, Curso de Experiência Somática - Associação Brasileira do Trauma – 2017, Graduação em Psicologia - Universidade Paranaense – 2019, Pós Graduação Piscoterapia Psicanalítica - Escola de Psicoterapia Psicanalítica de Maringá - em formação.",
    site: "https://www.google.com/",
    experience:
      "Angústia, Ansiedade, Autoestima, Depressão, Doenças Psicossomáticas, Síndrome do Pânico, Terapia de Casal/Casamento, Trauma, Bipolaridade",
    specializations: "psicologia infantil, psicologia de casais",
    image: "https://media.vittude.com/media/psicologo-roberta-delgado-louzada.webp",
    workDays: {
      1: [7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19],
      3: [7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19],
      5: [7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19],
    },
    id: 1,
  },
  {
    email: "ricardomansoti@gmail.com",
    password: "$2a$10$73WQGWUeVgug4uNFNMJwNethNwXu8I9zW3ajbKkWMNVMRO/XdGtYe",
    name: "Ricardo Mansoti",
    is_psic: true,
    phone: "(41)92349-8765",
    cpf_cnpj: "821.543.123-23",
    crp: "03/82323",
    price: "120",
    rating: "4.5",
    description:
      "Psicóloga Clinica, com especialização em experiência somática. Meu trabalho é fundamentado na análise de conteúdos inconscientes, com foco no autoconhecimento e na resolução de conflitos internos causadores de sofrimento, angústia, ansiedade, traumas, transtornos psicos e doenças psicossomáticas.",
    video: "https://www.youtube.com/embed/5qap5aO4i9A",
    language: "português",
    academic_formation:
      "Graduação em Administração – Faculdade Dom Bosco – 2008 , Curso de Terapia de Casais - Universidade Paranaense – 2017, Curso de Experiência Somática - Associação Brasileira do Trauma – 2017, Graduação em Psicologia - Universidade Paranaense – 2019, Pós Graduação Piscoterapia Psicanalítica - Escola de Psicoterapia Psicanalítica de Maringá - em formação.",
    site: "https://www.google.com/",
    experience:
      "Angústia, Ansiedade, Autoestima, Depressão, Doenças Psicossomáticas, Síndrome do Pânico, Terapia de Casal/Casamento, Trauma, Bipolaridade",
    specializations: "psicologia infantil, psicologia de casais",
    image: "https://media.vittude.com/media/psicologo-tiago-silva-pires-mascarenhas.webp",
    workDays: {
      1: [7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19],
      3: [7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19],
      5: [7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19],
    },
    id: 2,
  },
  {
    email: "anabsilva@gmail.com",
    password: "$2a$10$xfmjQl.Wxl9/5xCRqSjdM.XBcwY2vsJ5msC6R.UHHHT643m5IzHUO",
    name: "Ana Beatriz Silva",
    is_psic: true,
    phone: "(41)97652-8712",
    cpf_cnpj: "002.343.123-52",
    crp: "04/87954",
    price: "90",
    rating: "4.5",
    description:
      "Psicóloga Clinica, com especialização em experiência somática. Meu trabalho é fundamentado na análise de conteúdos inconscientes, com foco no autoconhecimento e na resolução de conflitos internos causadores de sofrimento, angústia, ansiedade, traumas, transtornos psicos e doenças psicossomáticas.",
    video: "https://www.youtube.com/embed/5qap5aO4i9A",
    language: "português, ingles, espanhol",
    academic_formation:
      "Graduação em Administração – Faculdade Dom Bosco – 2008 , Curso de Terapia de Casais - Universidade Paranaense – 2017, Curso de Experiência Somática - Associação Brasileira do Trauma – 2017, Graduação em Psicologia - Universidade Paranaense – 2019, Pós Graduação Piscoterapia Psicanalítica - Escola de Psicoterapia Psicanalítica de Maringá - em formação.",
    site: "https://www.google.com/",
    experience:
      "Angústia, Ansiedade, Autoestima, Depressão, Doenças Psicossomáticas, Síndrome do Pânico, Terapia de Casal/Casamento, Trauma, Bipolaridade",
    specializations: "psicologia infantil, psicologia de casais",
    image: "https://media.vittude.com/media/psicologo-fabiana-lima.webp",
    workDays: {
      1: [7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19],
      3: [7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19],
      5: [7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19],
    },
    id: 3,
  },
  {
    email: "crisjgonzaga@gmail.com",
    password: "$2a$10$USTg0bYLnnyaeMEYw30X/u0TRLwAnLG3hzxYscpTAdRuoz177OkyK",
    name: "Christopher Juliano Gonzaga",
    is_psic: true,
    phone: "(41)98987-8728",
    cpf_cnpj: "822.123.723-44",
    crp: "06/23164",
    price: "90",
    rating: "4.5",
    description:
      "Psicóloga Clinica, com especialização em experiência somática. Meu trabalho é fundamentado na análise de conteúdos inconscientes, com foco no autoconhecimento e na resolução de conflitos internos causadores de sofrimento, angústia, ansiedade, traumas, transtornos psicos e doenças psicossomáticas.",
    video: "https://www.youtube.com/embed/5qap5aO4i9A",
    language: "português, ingles",
    academic_formation:
      "Graduação em Administração – Faculdade Dom Bosco – 2008 , Curso de Terapia de Casais - Universidade Paranaense – 2017, Curso de Experiência Somática - Associação Brasileira do Trauma – 2017, Graduação em Psicologia - Universidade Paranaense – 2019, Pós Graduação Piscoterapia Psicanalítica - Escola de Psicoterapia Psicanalítica de Maringá - em formação.",
    site: "https://www.google.com/",
    experience:
      "Angústia, Ansiedade, Autoestima, Depressão, Doenças Psicossomáticas, Síndrome do Pânico, Terapia de Casal/Casamento, Trauma, Borderline",
    specializations: "psicologia infantil, psicologia de casais",
    image: "https://media.vittude.com/media/psicologo-marcus-vinicius-rossi-de-oliveira.webp",
    workDays: {
      2: [7, 8, 9, 10, 11, 13, 14, 15, 16],
      4: [7, 8, 9, 10, 11, 13, 14, 15, 16],
      5: [7, 8, 9, 10, 11, 13, 14, 15, 16],
    },
    id: 4,
  },
  {
    email: "carlosrodrigues@gmail.com",
    password: "$2a$10$1X8cnBJLllMhrzdbM.Ajmu3Ryuix8LyTjoCDN8ItAYpE/1lewgBNm",
    name: "Carlos Rodrigues",
    is_psic: true,
    phone: "(41)97899-8738",
    cpf_cnpj: "885.443.123-23",
    crp: "07/31885",
    price: "110",
    rating: "4.5",
    description:
      "Psicóloga Clinica, com especialização em experiência somática. Meu trabalho é fundamentado na análise de conteúdos inconscientes, com foco no autoconhecimento e na resolução de conflitos internos causadores de sofrimento, angústia, ansiedade, traumas, transtornos psicos e doenças psicossomáticas.",
    video: "https://www.youtube.com/embed/5qap5aO4i9A",
    language: "português, ingles, espanhol",
    academic_formation:
      "Graduação em Administração – Faculdade Dom Bosco – 2008 , Curso de Terapia de Casais - Universidade Paranaense – 2017, Curso de Experiência Somática - Associação Brasileira do Trauma – 2017, Graduação em Psicologia - Universidade Paranaense – 2019, Pós Graduação Piscoterapia Psicanalítica - Escola de Psicoterapia Psicanalítica de Maringá - em formação.",
    site: "https://www.google.com/",
    experience:
      "Angústia, Ansiedade, Autoestima, Depressão, Doenças Psicossomáticas, Síndrome do Pânico, Terapia de Casal/Casamento, Trauma, Borderline",
    specializations: "psicologia infantil, psicologia de casais",
    image: "https://media.vittude.com/media/psicologo-eduardo-monteiro_7zustUo.webp",
    workDays: {
      1: [7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19],
      3: [7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19],
      5: [7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19],
    },
    id: 5,
  },
  {
    email: "julianapeixotoluz@gmail.com",
    password: "$2a$10$c8CMWIzf5yOSJIeIvwlra.lNeimdotigk33hzhnjIASDKCiboNeV6",
    name: "Juliana Peixoto da Luz",
    is_psic: true,
    phone: "(41)98452-8420",
    cpf_cnpj: "852.789.320-34",
    crp: "09/96325",
    price: "90",
    rating: "4.5",
    description:
      "Psicóloga Clinica, com especialização em experiência somática. Meu trabalho é fundamentado na análise de conteúdos inconscientes, com foco no autoconhecimento e na resolução de conflitos internos causadores de sofrimento, angústia, ansiedade, traumas, transtornos psicos e doenças psicossomáticas.",
    video: "https://www.youtube.com/embed/5qap5aO4i9A",
    language: "português, ingles",
    academic_formation:
      "Graduação em Administração – Faculdade Dom Bosco – 2008 , Curso de Terapia de Casais - Universidade Paranaense – 2017, Curso de Experiência Somática - Associação Brasileira do Trauma – 2017, Graduação em Psicologia - Universidade Paranaense – 2019, Pós Graduação Piscoterapia Psicanalítica - Escola de Psicoterapia Psicanalítica de Maringá - em formação.",
    site: "https://www.google.com/",
    experience:
      "Angústia, Ansiedade, Autoestima, Depressão, Doenças Psicossomáticas, Síndrome do Pânico, Terapia de Casal/Casamento, Trauma, Borderline",
    specializations: "psicologia infantil, psicologia de casais",
    image: "https://media.vittude.com/media/psicologo-maria-neide-dos-reis-silva.webp",
    workDays: {
      2: [7, 8, 9, 10, 11, 13, 14, 15, 16],
      4: [7, 8, 9, 10, 11, 13, 14, 15, 16],
      5: [7, 8, 9, 10, 11, 13, 14, 15, 16],
    },
    id: 6,
  },
  {
    email: "natashaaoliveira@gmail.com",
    password: "$2a$10$oMggEYIVKpcj/FYyvmzGruBEq29uDC6/haKLBdeZm9e20onY0WiSy",
    name: "Natasha Andrade de Oliveira",
    is_psic: true,
    phone: "(41)98454-8124",
    cpf_cnpj: "437.581.691-11",
    crp: "06/85963",
    price: "90",
    rating: "4.5",
    description:
      "Psicóloga Clinica, com especialização em experiência somática. Meu trabalho é fundamentado na análise de conteúdos inconscientes, com foco no autoconhecimento e na resolução de conflitos internos causadores de sofrimento, angústia, ansiedade, traumas, transtornos psicos e doenças psicossomáticas.",
    video: "https://www.youtube.com/embed/5qap5aO4i9A",
    language: "português, ingles, espanhol",
    academic_formation:
      "Graduação em Administração – Faculdade Dom Bosco – 2008 , Curso de Terapia de Casais - Universidade Paranaense – 2017, Curso de Experiência Somática - Associação Brasileira do Trauma – 2017, Graduação em Psicologia - Universidade Paranaense – 2019, Pós Graduação Piscoterapia Psicanalítica - Escola de Psicoterapia Psicanalítica de Maringá - em formação.",
    site: "https://www.google.com/",
    experience:
      "Angústia, Ansiedade, Autoestima, Depressão, Doenças Psicossomáticas, Síndrome do Pânico, Terapia de Casal/Casamento, Trauma",
    specializations: "psicologia infantil, psicologia de casais",
    image: "https://media.vittude.com/media/psicologo-luana-maria-mendes-pedron.webp",
    workDays: {
      1: [7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19],
      3: [7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19],
      5: [7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19],
    },
    id: 7,
  },
  {
    email: "jordansilveira@gmail.com",
    password: "$2a$10$vPaC3fxvi.hpKEkZA8c0yeRnkN19r0Pot2dkkY028GoM3vzRfHEni",
    name: "Jordan Silveira",
    is_psic: true,
    phone: "(41)99321-8798",
    cpf_cnpj: "528.546.591-32",
    crp: "05/22151",
    price: "90",
    rating: "4.5",
    description:
      "Psicóloga Clinica, com especialização em experiência somática. Meu trabalho é fundamentado na análise de conteúdos inconscientes, com foco no autoconhecimento e na resolução de conflitos internos causadores de sofrimento, angústia, ansiedade, traumas, transtornos psicos e doenças psicossomáticas.",
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
      2: [7, 8, 9, 10, 11, 13, 14, 15, 16],
      4: [7, 8, 9, 10, 11, 13, 14, 15, 16],
      5: [7, 8, 9, 10, 11, 13, 14, 15, 16],
    },
    id: 8,
  },
  {
    email: "jadsonoliveira@gmail.com",
    password: "$2a$10$1S5A.pWZcnkPywJPC61T4ujVPvSZ1l3KsVpV/ocTtjHci43fAIvYe",
    name: "Jadson Oliveira",
    is_psic: true,
    phone: "(41)98769-8798",
    cpf_cnpj: "8823.4512.532-23",
    crp: "01/14852",
    price: "90",
    rating: "4.5",
    description:
      "Psicóloga Clinica, com especialização em experiência somática. Meu trabalho é fundamentado na análise de conteúdos inconscientes, com foco no autoconhecimento e na resolução de conflitos internos causadores de sofrimento, angústia, ansiedade, traumas, transtornos psicos e doenças psicossomáticas.",
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
      3: [7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19],
      5: [7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19],
    },
    id: 9,
  },
  {
    email: "esthephanycarneiro@gmail.com",
    password: "$2a$10$GEUyjIurpbnKtaGFKJxZi.fQkzN/bKGnmYL1TMxqmo7RBRQFwfNeq",
    name: "Estephany Carneiro",
    is_psic: true,
    phone: "(41)94129-8128",
    cpf_cnpj: "822.441.163-56",
    crp: "03/24879",
    price: "90",
    rating: "4.5",
    description:
      "Psicóloga Clinica, com especialização em experiência somática. Meu trabalho é fundamentado na análise de conteúdos inconscientes, com foco no autoconhecimento e na resolução de conflitos internos causadores de sofrimento, angústia, ansiedade, traumas, transtornos psicos e doenças psicossomáticas.",
    video: "https://www.youtube.com/embed/5qap5aO4i9A",
    language: "português, ingles, espanhol",
    academic_formation:
      "Graduação em Administração – Faculdade Dom Bosco – 2008 , Curso de Terapia de Casais - Universidade Paranaense – 2017, Curso de Experiência Somática - Associação Brasileira do Trauma – 2017, Graduação em Psicologia - Universidade Paranaense – 2019, Pós Graduação Piscoterapia Psicanalítica - Escola de Psicoterapia Psicanalítica de Maringá - em formação.",
    site: "https://www.google.com/",
    experience:
      "Angústia, Ansiedade, Autoestima, Depressão, Doenças Psicossomáticas, Síndrome do Pânico, Terapia de Casal/Casamento, Trauma",
    specializations: "psicologia infantil, psicologia de casais",
    image: "https://media.vittude.com/media/psicologo-luana-maria-mendes-pedron.webp",
    workDays: {
      2: [7, 8, 9, 10, 11, 13, 14, 15, 16],
      4: [7, 8, 9, 10, 11, 13, 14, 15, 16],
      5: [7, 8, 9, 10, 11, 13, 14, 15, 16],
    },
    id: 10,
  },
  {
    email: "priscillalima@gmail.com",
    password: "$2a$10$0jUVYwUOFd6hRPncmag4IeSJKOcLytlTr9J2h1LVUPNdO3f09k9U6",
    name: "Priscilla Lima",
    is_psic: true,
    phone: "(41)97332-8798",
    cpf_cnpj: "789.523.147-90",
    crp: "02/74856",
    price: "90",
    rating: "4.5",
    description:
      "Psicóloga Clinica, com especialização em experiência somática. Meu trabalho é fundamentado na análise de conteúdos inconscientes, com foco no autoconhecimento e na resolução de conflitos internos causadores de sofrimento, angústia, ansiedade, traumas, transtornos psicos e doenças psicossomáticas.",
    video: "https://www.youtube.com/embed/5qap5aO4i9A",
    language: "português, ingles, espanhol",
    academic_formation:
      "Graduação em Administração – Faculdade Dom Bosco – 2008 , Curso de Terapia de Casais - Universidade Paranaense – 2017, Curso de Experiência Somática - Associação Brasileira do Trauma – 2017, Graduação em Psicologia - Universidade Paranaense – 2019, Pós Graduação Piscoterapia Psicanalítica - Escola de Psicoterapia Psicanalítica de Maringá - em formação.",
    site: "https://www.google.com/",
    experience:
      "Angústia, Ansiedade, Autoestima, Depressão, Doenças Psicossomáticas, Síndrome do Pânico, Terapia de Casal/Casamento, Trauma",
    specializations: "psicologia infantil, psicologia de casais",
    image: "https://media.vittude.com/media/psicologo-andressa-cristina-poncio.webp",
    workDays: {
      1: [7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19],
      3: [7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19],
      5: [7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19],
    },
    id: 11,
  },
  {
    email: "ahncarolina@gmail.com",
    password: "$2a$10$8y7Dqr21LbyFsYNfqm98W.u0GFuUiEDQxC4WSrm3dTpwinsbEFHuW",
    name: "Carolina Ahn",
    is_psic: false,
    phone: "(41)98979-9999",
    cpf_cnpj: "099.999.999.18",
    id: 12,
  },
  {
    email: "rodisval.psicologo@gmail.com",
    password: "$2a$10$4rN/ilBrjR94eNfQGpwpt.ksyf7Pttk2A2MlvjDdJWv6RaoR.5BR2",
    name: "Rodisval Pereira",
    is_psic: true,
    phone: "(41)98745-2365",
    "cpf-cnpj": "112.521.322.15",
    crp: "01/901292",
    price: "500",
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
      1: [7, 8, 9, 10, 11, 12],
      2: [7, 8, 9, 10],
      3: [7, 8, 9],
      4: [],
      5: [7, 8, 9],
    },
    id: 13,
    userId: 13,
  },
  {
    email: "john@gmail.com",
    password: "gaefga$8y7Dqr21LbyFsYNfqm98W.u0GFuUiEDQxC4WSrm3dTpwinsbEFHuW",
    name: "John Fernandez",
    is_psic: false,
    phone: "(41)98555-7676",
    cpf_cnpj: "044.999.999.18",
    id: 14,
  },
  {
    email: "paulagomes@gmail.com",
    password: "$2a$10$8y7Dqr2fggsfgNfqm98W.u0GFuUiEDQxC4WSrm3dTpwinsbEFHuW",
    name: "Paula Gomes",
    is_psic: false,
    phone: "(41)99877-9999",
    cpf_cnpj: "056.123.999.18",
    id: 15,
  },
  {
    email: "anacardosos@gmail.com",
    password: "$dfrgg0$8y7Dqr21LbyFsYNfqm98W.u0GFuUiEDQxC4WSrm3dTpwinsbEFHuW",
    name: "Ana Maria Cardoso Santos",
    is_psic: false,
    phone: "(41)97789-5679",
    cpf_cnpj: "021.999.932.18",
    id: 16,
  },
  {
    email: "gabrielmv@gmail.com",
    password: "grtbd1LbyFsYNfqm98W.u0GFuUiEDQxC4WSrm3dTpwinsbEFHuW",
    name: "Gabriel Matos",
    is_psic: false,
    phone: "(41)99887-9873",
    cpf_cnpj: "027.999.999.04",
    id: 17,
  },
  {
    email: "fernandass@gmail.com",
    password: "hsrthxds21LbyFsYNfqm98W.u0GFuUiEDQxC4WSrm3dTpwinsbEFHuW",
    name: "Fernanda Souza Sereno",
    is_psic: false,
    phone: "(41)97655-9599",
    cpf_cnpj: "039.428.999.18",
    id: 18,
  },
  {
    email: "robson@gmail.com",
    password: "$2a$10$7eBqGLDf0oVTZV9sE.jt7.8Bz1CzD5AqfjWmE4PkdO8Vc15h65kv6",
    name: "robson robson",
    phone: "(41) 99999-9999",
    cpf_cnpj: "00.000.000/0000-00",
    isPsic: false,
    id: 19,
  },
];

const allAppointments = [
  {
    userId: 14,
    id: 1,
    date: {
      start: "2020-09-07 13:00:00",
      end: "2020-09-07 14:00:00",
    },
    patient: {
      name: "John Fernandez",
      id: 14,
    },
    psic: {
      name: "Joana Camargo Mota",
      id: 1,
    },
  },
  {
    userId: 14,
    id: 2,
    date: {
      start: "2020-09-30 10:00:00",
      end: "2020-09-30 11:00:00",
    },
    patient: {
      name: "John Fernandez",
      id: 14,
    },
    psic: {
      name: "Joana Camargo Mota",
      id: 1,
    },
  },
  {
    userId: 14,
    id: 3,
    date: {
      start: "2020-10-02 14:00:00",
      end: "2020-10-02 15:00:00",
    },
    patient: {
      name: "John Fernandez",
      id: 14,
    },
    psic: {
      name: "Joana Camargo Mota",
      id: 1,
    },
  },
  {
    userId: 14,
    id: 4,
    date: {
      start: "2020-10-16 13:00:00",
      end: "2020-10-16 14:00:00",
    },
    patient: {
      name: "John Fernandez",
      id: 14,
    },
    psic: {
      name: "Joana Camargo Mota",
      id: 1,
    },
  },
  {
    userId: 14,
    id: 5,
    date: {
      start: "2020-10-26 10:00:00",
      end: "2020-10-26 11:00:00",
    },
    patient: {
      name: "John Fernandez",
      id: 14,
    },
    psic: {
      name: "Joana Camargo Mota",
      id: 1,
    },
  },
  {
    userId: 15,
    id: 6,
    date: {
      start: "2020-09-14 08:00:00",
      end: "2020-09-14 09:00:00",
    },
    patient: {
      name: "Paula Gomes",
      id: 15,
    },
    psic: {
      name: "Joana Camargo Mota",
      id: 1,
    },
  },
  {
    userId: 15,
    id: 7,
    date: {
      start: "2020-09-16 08:00:00",
      end: "2020-09-16 09:00:00",
    },
    patient: {
      name: "Paula Gomes",
      id: 15,
    },
    psic: {
      name: "Joana Camargo Mota",
      id: 1,
    },
  },
  {
    userId: 15,
    id: 8,
    date: {
      start: "2020-09-16 08:00:00",
      end: "2020-09-16 09:00:00",
    },
    patient: {
      name: "Paula Gomes",
      id: 15,
    },
    psic: {
      name: "Joana Camargo Mota",
      id: 1,
    },
  },
  {
    userId: 15,
    id: 9,
    date: {
      start: "2020-10-07 08:00:00",
      end: "2020-10-07 09:00:00",
    },
    patient: {
      name: "Paula Gomes",
      id: 15,
    },
    psic: {
      name: "Joana Camargo Mota",
      id: 1,
    },
  },
  {
    userId: 15,
    id: 10,
    date: {
      start: "2020-10-09 08:00:00",
      end: "2020-10-09 09:00:00",
    },
    patient: {
      name: "Paula Gomes",
      id: 15,
    },
    psic: {
      name: "Joana Camargo Mota",
      id: 1,
    },
  },
  {
    userId: 15,
    id: 11,
    date: {
      start: "2020-10-14 08:00:00",
      end: "2020-10-14 09:00:00",
    },
    patient: {
      name: "Paula Gomes",
      id: 15,
    },
    psic: {
      name: "Joana Camargo Mota",
      id: 1,
    },
  },
  {
    userId: 15,
    id: 12,
    date: {
      start: "2020-10-16 08:00:00",
      end: "2020-10-16 09:00:00",
    },
    patient: {
      name: "Paula Gomes",
      id: 15,
    },
    psic: {
      name: "Joana Camargo Mota",
      id: 1,
    },
  },
  {
    userId: 15,
    id: 13,
    date: {
      start: "2020-10-19 08:00:00",
      end: "2020-10-19 09:00:00",
    },
    patient: {
      name: "Paula Gomes",
      id: 15,
    },
    psic: {
      name: "Ricardo Mansoti",
      id: 2,
    },
  },
  {
    userId: 15,
    id: 14,
    date: {
      start: "2020-10-21 08:00:00",
      end: "2020-10-21 09:00:00",
    },
    patient: {
      name: "Paula Gomes",
      id: 15,
    },
    psic: {
      name: "Ricardo Mansoti",
      id: 2,
    },
  },
  {
    userId: 15,
    id: 15,
    date: {
      start: "2020-10-23 08:00:00",
      end: "2020-10-23 09:00:00",
    },
    patient: {
      name: "Paula Gomes",
      id: 15,
    },
    psic: {
      name: "Ricardo Mansoti",
      id: 2,
    },
  },
  {
    userId: 16,
    id: 16,
    date: {
      start: "2020-10-19 08:00:00",
      end: "2020-10-19 09:00:00",
    },
    patient: {
      name: "Ana Maria Cardoso Santos",
      id: 16,
    },
    psic: {
      name: "Ana Beatriz Silva",
      id: 3,
    },
  },
  {
    userId: 16,
    id: 17,
    date: {
      start: "2020-10-21 08:00:00",
      end: "2020-10-21 09:00:00",
    },
    patient: {
      name: "Ana Maria Cardoso Santos",
      id: 16,
    },
    psic: {
      name: "Ana Beatriz Silva",
      id: 3,
    },
  },
  {
    userId: 16,
    id: 18,
    date: {
      start: "2020-10-23 08:00:00",
      end: "2020-10-23 09:00:00",
    },
    patient: {
      name: "Ana Maria Cardoso Santos",
      id: 16,
    },
    psic: {
      name: "Ana Beatriz Silva",
      id: 3,
    },
  },
  {
    userId: 17,
    id: 19,
    date: {
      start: "2020-10-19 08:00:00",
      end: "2020-10-19 09:00:00",
    },
    patient: {
      name: "Gabriel Matos",
      id: 17,
    },
    psic: {
      name: "Rodisval Pereira",
      id: 13,
    },
  },
  {
    userId: 17,
    id: 20,
    date: {
      start: "2020-10-21 08:00:00",
      end: "2020-10-21 09:00:00",
    },
    patient: {
      name: "Gabriel Matos",
      id: 17,
    },
    psic: {
      name: "Rodisval Pereira",
      id: 13,
    },
  },
  {
    userId: 17,
    id: 21,
    date: {
      start: "2020-10-23 08:00:00",
      end: "2020-10-23 09:00:00",
    },
    patient: {
      name: "Gabriel Matos",
      id: 17,
    },
    psic: {
      name: "Rodisval Pereira",
      id: 13,
    },
  },
  {
    userId: 12,
    id: 22,
    date: {
      start: "2020-10-02 17:00:00",
      end: "2020-10-02 18:00:00",
    },
    patient: {
      name: "Carolina Ahn",
      id: 12,
    },
    psic: {
      name: "Rodisval Pereira",
      id: 13,
    },
  },
  {
    userId: 12,
    id: 23,
    date: {
      start: "2020-10-09 13:00:00",
      end: "2020-10-09 14:00:00",
    },
    patient: {
      name: "Carolina Ahn",
      id: 12,
    },
    psic: {
      name: "Rodisval Pereira",
      id: 13,
    },
  },
  {
    userId: 12,
    id: 24,
    date: {
      start: "2020-10-16 15:00:00",
      end: "2020-10-16 16:00:00",
    },
    patient: {
      name: "Carolina Ahn",
      id: 12,
    },
    psic: {
      name: "Rodisval Pereira",
      id: 13,
    },
  },
  {
    userId: 12,
    id: 25,
    date: {
      start: "2020-10-23 13:00:00",
      end: "2020-10-23 14:00:00",
    },
    patient: {
      name: "Carolina Ahn",
      id: 12,
    },
    psic: {
      name: "Rodisval Pereira",
      id: 13,
    },
  },
  {
    userId: 12,
    id: 26,
    date: {
      start: "2020-10-30 17:00:00",
      end: "2020-10-30 18:00:00",
    },
    patient: {
      name: "Carolina Ahn",
      id: 12,
    },
    psic: {
      name: "Rodisval Pereira",
      id: 13,
    },
  },
];
