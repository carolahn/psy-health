import React, { useState } from "react";

import CardPsiAppointment from "../../components/card-psi-appointment";
import { CardListWrapper, SpecialList } from "./styled";

const CardListPsiAppointments = ({ type, appointments, numberOfCards }) => {
  const [overflow, setOverflow] = useState("hidden");
  const [buttonText, setButtonText] = useState("Ver todos");
  let sorted = {};
  let special = false;
  let sliced = {};
  if (type === "next") {
    sorted = Object.values(appointments).sort(function (a, b) {
      return new Date(a.date.start).getTime() - new Date(b.date.start).getTime();
    });

    sorted = sorted.slice(0, numberOfCards);
  }

  if (type === "past") {
    sorted = Object.values(appointments).sort(function (b, a) {
      return new Date(a.date.start).getTime() - new Date(b.date.start).getTime();
    });
    if (sorted.length > 3) {
      special = true;
    }
    sliced = sorted.slice(0, numberOfCards);
  }

  const handleOnClick = (event) => {
    event.preventDefault();
    if (overflow === "hidden") {
      setOverflow("scroll");
      setButtonText("Resumir");
    } else {
      setOverflow("hidden");
      setButtonText("Ver todos");
    }
  };

  return (
    <CardListWrapper className="card-list-psi-appointments" style={{ maxWidth: "550px" }}>
      {special ? (
        overflow === "hidden" ? (
          <>
            <div className="btn-container">
              <button type="button" className="btn-more" onClick={handleOnClick}>
                {buttonText}
              </button>
            </div>
            <SpecialList className="special-list" overflow={overflow}>
              {sliced &&
                sliced.map((item, index) => (
                  <CardPsiAppointment key={index} type={type} appointmentData={item} />
                ))}
            </SpecialList>
          </>
        ) : (
          <>
            <div className="btn-container">
              <button type="button" className="btn-more" onClick={handleOnClick}>
                {buttonText}
              </button>
            </div>
            <SpecialList className="special-list" overflow={overflow}>
              {sorted &&
                sorted.map((item, index) => (
                  <CardPsiAppointment key={index} type={type} appointmentData={item} />
                ))}
            </SpecialList>
          </>
        )
      ) : (
        <div>
          {sorted &&
            sorted.map((item, index) => (
              <CardPsiAppointment key={index} type={type} appointmentData={item} />
            ))}
        </div>
      )}
    </CardListWrapper>
  );
};

export default CardListPsiAppointments;
