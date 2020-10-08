import React from "react";

import CardPsiAppointment from "../card-psi-appointment";

const CardListPsiAppointments = ({ type, appointments, numberOfCards }) => {
  let sorted = Object.values(appointments).sort(function (a, b) {
    return new Date(a.date.start).getTime() - new Date(b.date.start).getTime();
  });

  sorted = sorted.slice(0, numberOfCards);

  return (
    <div className="card-list-psi-appointments" style={{ maxWidth: "550px" }}>
      {sorted &&
        sorted.map((item, index) => (
          <CardPsiAppointment key={index} type={type} appointmentData={item} />
        ))}
    </div>
  );
};

export default CardListPsiAppointments;
