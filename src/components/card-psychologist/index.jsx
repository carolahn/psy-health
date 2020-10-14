import { Rate } from "antd";
import React from "react";
import "antd/dist/antd.css";
import StyledContainer from "./styled";
import { useWindowSize } from "../../hooks";
import Button from '../button';

const CardPsychologist = ({
  image,
  name,
  description,
  crp,
  rating,
  specializations,
  language,
  price,
  onClick
}) => {
  const [width] = useWindowSize();

  if(width >= 950) {
    return (
      <StyledContainer>
        <div className="container-img">
          <img src={image} alt="Imagem do Psicólogo" />
          <span id="crp">{`CRP: ${crp}`}</span>
          <Rate allowHalf value={rating} disabled />
          <h5>Valor por atendimento</h5>
          <span id="price-per-hour">{`R$${price}/50min`}</span>
        </div>
  
        <div className="container-abstract">
          <h4>{name}</h4>
          <p>
          { description }
          </p>
          <h5>Especialidades</h5>
          <p>{specializations}</p>
          <h5>Idiomas</h5>
          <p>{language}</p>
          <div className="container-btn">
            <Button 
                  width="100%"
                  height="50px"
                  title="Agendar uma consulta"
                  fontSize="0.8rem"
                  onClick={onClick}
            /> 
          </div>
        </div>
      </StyledContainer>
    );
  }else {
    return (
      <StyledContainer>
        <div className="container-img">
          <img src={image} alt="Imagem do Psicólogo" />
          <h4>{name}</h4>
          <span id="crp">{`CRP: ${crp}`}</span>
          <Rate allowHalf value={rating} disabled />
          <h5>Valor por atendimento</h5>
          <span id="price-per-hour">{`R$${price}/50min`}</span>
        </div>
  
        <div className="container-abstract">
          <p>
          { description }
          </p>
          <h5>Especialidades</h5>
          <p>{specializations}</p>
          <h5>Idiomas</h5>
          <p>{language}</p>
          <div className="container-btn">
            <Button 
                  width="80%"
                  height="50px"
                  title="Agendar uma consulta"
                  fontSize="0.8rem"
                  onClick={onClick}
            /> 
          </div>
        </div>
      </StyledContainer>
    );
  }
};

export default CardPsychologist;