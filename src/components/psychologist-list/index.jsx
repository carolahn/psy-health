import React from "react";

import CardPsychologist from "../card-psychologist";
import StyledPsychologistList from "./styled";

const PsychologistList = ({ psychologists }) => {
  return (
    <StyledPsychologistList>
      {psychologists.map((psychologist, index) => (
        <CardPsychologist
          key={index}
          name={psychologist.name}
          image={psychologist.image}
          description={psychologist.description}
          crp={psychologist.crp}
          rating={psychologist.rating}
          specializations={psychologist.specializations}
          language={psychologist.language}
          price={psychologist.price}
        />
      ))}
    </StyledPsychologistList>
  );
};

export default PsychologistList;
