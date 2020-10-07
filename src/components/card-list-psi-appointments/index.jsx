import React from "react";

import CardPsiAppointment from "../card-psi-appointment";

const CardListPsiAppointments = ({ type, myAppointments }) => {
  const sorted = Object.values(myAppointments).sort(function (a, b) {
    return new Date(a.date.start).getTime() - new Date(b.date.start).getTime();
  });
  console.log(sorted);
  return (
    <div className="card-list-psi-appointments">
      {sorted &&
        sorted.map((item, index) => (
          <CardPsiAppointment key={index} type={type} appointmentData={item} />
        ))}
    </div>
  );
};

export default CardListPsiAppointments;
