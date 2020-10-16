import React from 'react';
import { Rate } from 'antd';
import styled from 'styled-components';

const CardComment = ({ image, coment, grading }) => {
    return (
        <StyledContainerCard>
            <img src={image} alt="Imagem do depoimento" />
            <p>{coment}</p>
            <div className='grading'>
                <Rate allowHalf value={grading} disabled={true} />
            </div>
        </StyledContainerCard>
    );
}

export default CardComment;

const StyledContainerCard = styled.div`
    display: flex;
    flex-direction: column;			
    width: 250px;
    height: 240px;
    border: 2px solid #70A3EF;
    border-radius: 3px;
    background-color: white;
    padding: 15px 1% 5px 1%;
    box-sizing: border-box;


        img{
            border: 1px solid #70A3EF;
            width: 75px;
            height: 75px;
            border-radius: 50%;
            margin: 0 auto;
        }

        p{
            font-size: 0.7rem;
            color: #6E6E6E;
            margin: auto;
        }

        .grading{
            text-align: center;
        }
`;
