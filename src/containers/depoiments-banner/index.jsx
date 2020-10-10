import React from 'react';
import CarouselComment from '../../components/carousel-comment';

// Recebe um array com todos os depoimentos
const CarouselCommentLogic = (props) => {
    const listComments = [];

    while(listComments.length < 9) {
        let random = Math.round(Math.random() * (props.listComments.length - 1));
      
        //Verifica se não tem um comentário do userId na lista. Se não encontrar, ele adiciona o comentario na lista
        if(listComments.find(position => position.userId === props.listComments[random].userId) === undefined) {
            listComments.push(props.listComments[random]);
        }
    }

    return <CarouselComment listComments={listComments}/>
}

export default CarouselCommentLogic;