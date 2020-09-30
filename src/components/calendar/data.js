export const psic0 = {
  id: 0,
  name: "Rodisval Pereira",
  email: "rodisval.psicologo@gmail.com",
  phone: "(41)98745-2365",
  "cpf-cnpj": "112.521.322.15",
  crp: "01/901292",
  password: "123abc",
  image:
    "https://media.vittude.com/media/profile_photos/psicologo-jose-alan-martins-de-freitas_5MAeAhE.jpg",
  specializations: ["psicologia infantil", "psicologia de casais"],
  workDays: {
    1: [7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19],
    2: [8, 9, 10],
    5: [13, 14, 15, 16, 17, 18, 19],
  },
  appointments: [
    {
      id: 0,
      date: {
        start: "2020-09-03 10:00:00",
        end: "2020-09-03 11:00:00",
      },
      patient: {
        name: "João da Silva",
        id: 0,
      },
    },
    {
      id: 1,
      date: {
        start: "2020-10-02 15:00:00",
        end: "2020-10-02 16:00:00",
      },
      patient: {
        name: "João da Silva",
        id: 0,
      },
    },
  ],
};

export const pat0 = {
  id: 0,
  name: "João da Silva",
  email: "joaodasilva@gmail.com",
  phone: "(41)98979-8798",
  "cpf-cnpj": "016.538.123.18",
  password: "123456",
  appointments: [
    {
      id: 0,
      date: {
        start: "2020-09-03 10:00:00",
        end: "2020-09-03 11:00:00",
      },
      psic: {
        name: "Rodisval Pereira",
        id: 0,
      },
    },
    {
      id: 1,
      date: {
        start: "2020-10-02 15:00:00",
        end: "2020-10-02 16:00:00",
      },
      psic: {
        name: "Rodisval Pereira",
        id: 0,
      },
    },
  ],
};
