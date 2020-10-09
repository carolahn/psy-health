import React from 'react';
import { StyledDivContainer, StyledCarousel, StyledInnerCarousel} from './styled';
import CardComment from '../card-comment';
import { useWindowSize } from "../../hooks";

const CarouselComment = ({listComments}) => {
    const [width] = useWindowSize();
    const listCommentsFiltered = [];

    while(listCommentsFiltered.length < 9) {
        let random = Math.round(Math.random() * (listComments.length - 1));

        // Verifica se não tem um comentário do userId na lista. Se não encontrar, ele adiciona o comentario na lista
        if(listCommentsFiltered.find(position => position.userId === listComments[random].userId) === undefined) {
            listCommentsFiltered.push(listComments[random]);
        }
    }
    
    return (
        <StyledDivContainer>
            <h1>Depoimentos</h1>
            <StyledCarousel>
                {
                    width >= 950 ? (
                        listCommentsFiltered.map((e, i, arr) => {
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
                    listCommentsFiltered.map((e, key) => {
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

