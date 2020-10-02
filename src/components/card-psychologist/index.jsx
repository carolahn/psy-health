import React from 'react';
import { Rate } from 'antd';
import StyledContainer from './styled';

const CardPsychologist = ({ imgUrl, name, abstract, crp, rating, specialty, languages, value }) => {
    return (
        <StyledContainer>
            <div className='container-img'>
                <img src={imgUrl} alt="Imagem do Psicólogo" />
                <span id='crp'>{`CRP: ${crp}`}</span>
                <Rate value={rating} disabled={true} />
                <h5>Valor por atendimento</h5>
                <span id='price-per-hour'>{`R$${value.price}/${value.perHour}min`}</span>
            </div>

            <div className='container-abstract'>
                <h4>{name}</h4>
                <p>{abstract}</p>
                <h5>Especialidades</h5>
                <p>{specialty.join(', ')}</p>
                <h5>Idiomas</h5>
                <p>{languages.join(', ')}</p>
                <button>Agendar uma consulta</button>
            </div>
        </StyledContainer>
    );
}

export default CardPsychologist;
