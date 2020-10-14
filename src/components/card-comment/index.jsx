import React from 'react';
import { Rate } from 'antd';
import styled from 'styled-components';

const CardComment = ({ image, coment, grading }) => {
    console.log(image);
    
    return (
        <StyledContainerCard>
            <div className="container-header">
                <img src={image} alt="Imagem do depoimento" />
            </div>
            <p>{coment}</p>
            <div className={'grading'}>
                <Rate allowHalf value={grading} disabled={true} />
            </div>
        </StyledContainerCard>
    );
}

export default CardComment;

const StyledContainerCard = styled.div`
    width: 250px;
    border: 2px solid #70A3EF;
    border-radius: 3px;
    background-color: white;
    padding: 15px 1% 5px 1%;

    .container-header{
        display: flex;
        
        img{
            border: 1px solid #70A3EF;
            width: 75px;
            height: 75px;
            border-radius: 50%;
        }
    }

    p{
        font-size: 0.7rem;
        color: #6E6E6E;
        margin-bottom: 7px;
    }

    .grading{
        text-align: center;
    }
`;
