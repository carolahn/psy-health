import React from 'react';
import CarouselComment from '../../card-psychologist';
import renderer from 'react-test-renderer';

it('CarouselComment-renderer', () => {
    const list = [
        {
          "name": "João",
          "image": 'https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo.jpg',
          "coment": "0Agradeço à Drª que conseguiu identificar o principal motivo do meu caso e, com a sua experiência, me fez pensar racionalmente. Juntos, buscamos soluções para que consiga resolvê-lo da melhor forma.",
          "grading": 5,
          "userId": 8
        },
        {
          "name": "João",
          "image": 'https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo.jpg',
          "coment": "1Agradeço à Drª que conseguiu identificar o principal motivo do meu caso e, com a sua experiência, me fez pensar racionalmente. Juntos, buscamos soluções para que consiga resolvê-lo da melhor forma.",
          "grading": 5,
          "userId": 7
        },
        {
          "name": "João",
          "image": 'https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo.jpg',
          "coment": "2Agradeço à Drª que conseguiu identificar o principal motivo do meu caso e, com a sua experiência, me fez pensar racionalmente. Juntos, buscamos soluções para que consiga resolvê-lo da melhor forma.",
          "grading": 5,
          "userId": 6
        },
        {
          "name": "João",
          "image": 'https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo.jpg',
          "coment": "3Agradeço à Drª que conseguiu identificar o principal motivo do meu caso e, com a sua experiência, me fez pensar racionalmente. Juntos, buscamos soluções para que consiga resolvê-lo da melhor forma.",
          "grading": 5,
          "userId": 5
        
        },
        {
          "name": "João",
          "image": 'https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo.jpg',
          "coment": "4Agradeço à Drª que conseguiu identificar o principal motivo do meu caso e, com a sua experiência, me fez pensar racionalmente. Juntos, buscamos soluções para que consiga resolvê-lo da melhor forma.",
          "grading": 5,
          "userId": 4
        },
        {
          "name": "João",
          "image": 'https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo.jpg',
          "coment": "5Agradeço à Drª que conseguiu identificar o principal motivo do meu caso e, com a sua experiência, me fez pensar racionalmente. Juntos, buscamos soluções para que consiga resolvê-lo da melhor forma.",
          "grading": 5,
          "userId": 3
        },
        {
          "name": "João",
          "image": 'https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo.jpg',
          "coment": "6Agradeço à Drª que conseguiu identificar o principal motivo do meu caso e, com a sua experiência, me fez pensar racionalmente. Juntos, buscamos soluções para que consiga resolvê-lo da melhor forma.",
          "grading": 5,
          "userId": 2
        },
        {
          "name": "João",
          "image": 'https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo.jpg',
          "coment": "7Agradeço à Drª que conseguiu identificar o principal motivo do meu caso e, com a sua experiência, me fez pensar racionalmente. Juntos, buscamos soluções para que consiga resolvê-lo da melhor forma.",
          "grading": 5,
          "userId": 1
        },
        {
          "name": "João",
          "image": 'https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo.jpg',
          "coment": "8Agradeço à Drª que conseguiu identificar o principal motivo do meu caso e, com a sua experiência, me fez pensar racionalmente. Juntos, buscamos soluções para que consiga resolvê-lo da melhor forma.",
          "grading": 5,
          "userId": 0
        }
    ];
    
    const tree = renderer.create(
        <CarouselComment listComments={list}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});