import React from "react";
import renderer from "react-test-renderer";

import CardPatientConsultation from "../../card-patient-consultation";

describe("Render tests", () => {
  test("render card-patient-consultation with reschedule button", () => {
    const tree = renderer
      .create(
        <CardPatientConsultation
          constructDate={() => { }}
          constructHour={() => { }}
          cancelAppointment={() => { }}
          rescheduleAppointment={() => { }}
          onePsi={[
            {
              email: "mario@gmail.com",
              name: "Mario Silva",
              crp: "02/6667",
              price: 250,
              rating: "5",
              image: "img",
              id: 9,
            },
          ]}
          buttonOrAvaliation
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("render card-patient-consultation with avaliation button", () => {
    const tree = renderer
      .create(
        <CardPatientConsultation
          constructDate={() => { }}
          constructHour={() => { }}
          cancelAppointment={() => { }}
          rescheduleAppointment={() => { }}
          onePsi={[
            {
              email: "joanacmota@gmail.com",
              name: "Joana Camargo Mota",
              crp: "01/74521",
              price: 90,
              rating: "4.5",
              image: "img",
              id: 1,
            },
          ]}
          buttonOrAvaliation={false}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
