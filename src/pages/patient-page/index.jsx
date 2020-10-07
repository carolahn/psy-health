import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardPatientConsultation from "../../components/card-patient-consultation";
import { getAppointments } from "../../redux/actions/appointments";
import { getOneUser } from "../../redux/actions/users";
import { ContainerCards, TitleContainerAppointments, TitleContainerHistory } from "./styled";

const PatientPage = () => {
  const [appointmentsUser, setAppointmentsUser] = useState([]);
  const [psicId, setPsicId] = useState("");

  const dispatch = useDispatch();

  const newPsychologist = useSelector((state) => state.users.oneUser);
  // const userId = useSelector((state) => state.login.user.id);
  // const allAppointments = useSelector((state) => state.appointments.allAppointments);
  const userId = 14;

  useEffect(() => {
    filterAppointmentsUser();
  }, [allAppointments]);

  const filterAppointmentsUser = () => {
    setAppointmentsUser(allAppointments.filter((appointment) => appointment.userId === userId));
  };

  const findPsic = () => {
    dispatch(getOneUser(psicId));
  };

  const compareDates = (dateAppointment) => {
    const parts = dateAppointment[0].split("-");
    const today = new Date();

    dateAppointment = new Date(parts[0], parts[1] - 1, parts[2]);
    return dateAppointment >= today;
  };

  return (
    <ContainerCards>
      <TitleContainerAppointments>Consultas Agendadas</TitleContainerAppointments>
      {appointmentsUser &&
        appointmentsUser.map(
          (appointment) =>
            compareDates(appointment.date.start.split(" ")) && (
              // setPsicId(appointment.psic.id);
              // findPsic();

              <CardPatientConsultation oneUser={pys} appointment={appointment} />
            )
        )}
      <TitleContainerHistory>Histórico de Consultas</TitleContainerHistory>
      {appointmentsUser &&
        appointmentsUser.map((appointment) =>
          compareDates(appointment.date.start.split(" ")) ? null : (
            // setPsicId(appointment.psic.id);
            // findPsic();

            <CardPatientConsultation oneUser={pys} appointment={appointment} />
          )
        )}
    </ContainerCards>
  );
};

export default PatientPage;

const pys = {
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
