import React from 'react';
import { Rate } from 'antd';
import StyledContainer from './styled';

const CardPsychologist = ({ image, name, description, crp, rating, specializations, language, price }) => {
    return (
        <StyledContainer>
            <div className='container-img'>
                <img src={image} alt="Imagem do Psicólogo" />
                <span id='crp'>{`CRP: ${crp}`}</span>
                <Rate allowHalf value={rating} disabled={true} />
                <h5>Valor por atendimento</h5>
                <span id='price-per-hour'>{`R$${price}/50min`}</span>
            </div>

            <div className='container-abstract'>
                <h4>{name}</h4>
                <p>{description}</p>
                <h5>Especialidades</h5>
                <p>{specializations}</p>
                <h5>Idiomas</h5>
                <p>{language}</p>
                <button>Agendar uma consulta</button>
            </div>
        </StyledContainer>
    );
}

export default CardPsychologist;
