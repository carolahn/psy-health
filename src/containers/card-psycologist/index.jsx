import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { notification } from "antd";

import CardPsychologist from "../../components/card-psychologist";

const CardPsychologistLogic = ({
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
    const descriptionAbstract = (description.substr(0, 190) + '...');
    
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
        <CardPsychologist 
            image={image}
            name={name}
            description={descriptionAbstract}
            crp={crp}
            rating={rating}
            specializations={specializations}
            language={language}
            price={price}
            psiId={psiId}
            onClick={handleOnClick}
        />
    );
};

export default CardPsychologistLogic;
