import { Rate } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

import StyledContainer from "./styled";
import { useWindowSize } from "../../hooks";

const CardPsychologist = ({
  image,
  name,
  description,
  crp,
  rating,
  specializations,
  language,
  price,
  psiId,
}) => {
  const descriptionAbstract = (description.substr(0, 190) + '...');
  const [width] = useWindowSize();
  const history = useHistory();
  const handleOnClick = () => {
    history.push(`/psi/agendamentos/${psiId}`);
  };

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
          {
            descriptionAbstract
          }
          </p>
          <h5>Especialidades</h5>
          <p>{specializations}</p>
          <h5>Idiomas</h5>
          <p>{language}</p>
          <div className="container-btn">
            <button onClick={handleOnClick}>Agendar uma consulta</button>
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
          {
            descriptionAbstract
          }
          </p>
          <h5>Especialidades</h5>
          <p>{specializations}</p>
          <h5>Idiomas</h5>
          <p>{language}</p>
          <div className="container-btn">
            <button onClick={handleOnClick}>Agendar uma consulta</button>
          </div>
        </div>
      </StyledContainer>
    );
  }
};

export default CardPsychologist;
