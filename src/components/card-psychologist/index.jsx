import { Rate, notification } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "antd/dist/antd.css";
import StyledContainer from "./styled";

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
  const history = useHistory();
  const login = useSelector((state) => state.login);

  const handleOnClick = () => {
    if (JSON.stringify(login.user) !== "{}" && login.user.is_psic === true) {
      notification.info({
        key: login.user.id,
        message: "Área restrita aos pacientes",
        description: "Para agendar uma consulta, é necessário cadastrar-se como paciente.",
      });
    } else {
      history.push(`/psi/agendamentos/${psiId}`);
    }
  };

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
        <p>{description}</p>
        <h5>Especialidades</h5>
        <p>{specializations}</p>
        <h5>Idiomas</h5>
        <p>{language}</p>
        <button onClick={handleOnClick}>Agendar uma consulta</button>
      </div>
    </StyledContainer>
  );
};

export default CardPsychologist;
