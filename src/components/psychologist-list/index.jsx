import React from "react";

import CardPsychologistLogic from "../../containers/card-psycologist";
import StyledPsychologistList from "./styled";

const PsychologistList = ({ psychologists }) => {
  return (
    <StyledPsychologistList>
      {psychologists.map((psychologist, index) => (
        <CardPsychologistLogic
          key={index}
          name={psychologist.name}
          image={psychologist.image}
          description={psychologist.description}
          crp={psychologist.crp}
          rating={psychologist.rating}
          specializations={psychologist.specializations}
          language={psychologist.language}
          price={psychologist.price}
          psiId={psychologist.id}
        />
      ))}
    </StyledPsychologistList>
  );
};

export default PsychologistList;
