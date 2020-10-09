import React from 'react';
import { Carousel } from 'antd';
import CardComment from '../card-comment';
import styled from 'styled-components';
import { useWindowSize } from "../../hooks";

const CarouselComment = (props) => {
    const [width] = useWindowSize();
    const listComments = [];

    while(listComments.length < 9) {
        let random = Math.round(Math.random() * (props.listComments.length - 1));

        // Verifica se ja não tem um comentário do userId na lista. Se encontrar, ele adiciona o comentario na lista
        if(listComments.find(position => position.userId === props.listComments[random].userId) === undefined) {
            listComments.push(props.listComments[random]);
        }
    }
    
    return (
        <StyledDivContainer>
            <h1>Depoimentos</h1>
            <StyledCarousel>
                {
                    width >= 950 ? (
                        listComments.map((e, i, arr) => {
                            if (i % 3 === 0 && i <= arr.length - (i % 3)) return (
                                <StyledInnerCarousel key={i}>
                                    {arr[i] && <CardComment
                                        image={arr[i].image}
                                        name={arr[i].name}
                                        coment={arr[i].coment}
                                        grading={arr[i].grading}
                                    />}
                                    {arr[i + 1] && <CardComment
                                        image={arr[i + 1].image}
                                        name={arr[i + 1].name}
                                        coment={arr[i + 1].coment}
                                        grading={arr[i + 1].grading}
                                    />}
                                    {arr[i + 2] && <CardComment
                                        image={arr[i + 2].image}
                                        name={arr[i + 2].name}
                                        coment={arr[i + 2].coment}
                                        grading={arr[i + 2].grading}
                                    />}
                                </StyledInnerCarousel>
                            )
                        })
                    ) :
                        listComments.map((e, key) => {
                            return (
                                <StyledInnerCarousel key={key}>
                                    <CardComment
                                        image={e.image}
                                        name={e.name}
                                        coment={e.coment}
                                        grading={e.grading}
                                    />
                                </StyledInnerCarousel>
                            );
                        })
                }
                
            </StyledCarousel>
        </StyledDivContainer >
    );
}

export default CarouselComment;

const StyledDivContainer = styled.div`
    width: 100%;
    background-color: #F3F3F3;
    border-top: 3px solid #70A3EF;
    border-bottom: 3px solid #70A3EF;

    h1{
        color: #717171;
        text-align: center;
        margin-top: 14px;
    }
`;

const StyledCarousel = styled(Carousel)`
    min-height: 325px;
    width: 100%;
    display: flex !important;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    .slick-dots li button{
        border: 1px solid #70A3EF;
        height: 10px;
        width: 20px;
        border-radius: 3px;
    }

    .slick-dots li.slick-active button{
        background-color: #70A3EF;
    }
`;

const StyledInnerCarousel = styled.div`
    width: 100%;
    display: flex !important;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 25px;
`;

