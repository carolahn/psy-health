import React from "react";

import CardPsychologist from "../card-psychologist";
import StyledPsychologistList from './styled';

interface PsychologistListProps {
  psychologists : Array<{
    name: string,
    image: string,
    description: string,
    crp: string,
    rating: string,
    specializations : string,
    language : string,
    price: number,
    id : number}>
}

interface PsychologistMapProps {
  name: string,
  image: string,
  description: string,
  crp: string,
  rating: string,
  specializations : string,
  language : string,
  price: number,
  id : number,
}

const PsychologistList = ({ psychologists } : PsychologistListProps) => {
  return (
    <StyledPsychologistList>
      {psychologists.map((psychologist : PsychologistMapProps , index) => (
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
          psiId={psychologist.id}
        />
      ))}
    </StyledPsychologistList>
  );
};

export default PsychologistList;
