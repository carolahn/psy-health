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
        start: `${new Date(2020, 8, 2, 10, 0, 0)}`,
        end: `${new Date(2020, 8, 2, 11, 0, 0)}`,
      },
      patient: {
        name: "João da Silva",
        id: 0,
      },
    },
    {
      id: 1,
      date: {
        start: `${new Date(2020, 9, 2, 15, 0, 0)}`,
        end: `${new Date(2020, 9, 2, 16, 0, 0)}`,
      },
      patient: {
        name: "João da Silva",
        id: 0,
      },
    },
  ],
};
