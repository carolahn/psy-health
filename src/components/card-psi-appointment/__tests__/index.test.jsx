import React from "react";
import renderer from "react-test-renderer";

import CardPsiAppointment from "../index";

const appointmentData = {
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
};

describe("Render tests", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<CardPsiAppointment type="past" appointmentData={appointmentData} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
