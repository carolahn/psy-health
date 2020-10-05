import React from 'react';
import CardPsychologist from '../../components/card-psychologist';
import { Row } from 'antd';
import { StyledColSearch, StyledColCards, StyledMain } from './styled';
import { useSelector } from 'react-redux';

const Psychologist = () => {


    // Simula dos dados dos psicologos.
    const dataPsychologist = {
        users: [
            {
                image: 'https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo.jpg',
                name: 'Marcia Roberta Vasconcellos',
                description: 'typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                crp: '05/23212',
                rating: 2.5,
                specializations: ['Terapia de casal', 'Psicanalise', 'Psicossomática'],
                language: 'Português, Inglês',
                price: '120.00',
                is_psic: true
            },
            {
                image: 'https://claudia.abril.com.br/wp-content/uploads/2019/05/destaque-homem-maio.jpg',
                name: 'Roberto Jefferson Monteiro Francisco',
                description: 'to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
                crp: '05/23212',
                rating: 2,
                specializations: ['Terapia', 'Psicanalise'],
                language: 'Português',
                price: '100.00',
                is_psic: true
            },
            {
                image: 'https://img.huffingtonpost.com/asset/5c6ab0092500003502c88ce6.jpeg?cache=Idejm45rNe&ops=scalefit_630_noupscale',
                name: 'Marcia Roberta Vasconcellos',
                description: 'to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
                crp: '05/23212',
                rating: 1,
                specializations: ['Terapia', 'Psicanalise'],
                language: 'Português',
                price: '100.00',
                is_psic: true
            },
            {
                image: 'https://claudia.abril.com.br/wp-content/uploads/2019/05/destaque-homem-maio.jpg',
                name: 'Roberto Jefferson Monteiro Francisco',
                description: 'to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
                crp: '05/23212',
                rating: 2,
                specializations: ['Terapia', 'Psicanalise'],
                language: 'Português',
                price: '100.00',
                is_psic: true
            },
            {
                image: 'https://img.huffingtonpost.com/asset/5c6ab0092500003502c88ce6.jpeg?cache=Idejm45rNe&ops=scalefit_630_noupscale',
                name: 'Marcia Roberta Vasconcellos',
                description: 'to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
                crp: '05/23212',
                rating: 1,
                specializations: ['Terapia', 'Psicanalise'],
                language: 'Português',
                price: '100.00',
                is_psic: true
            },
            {
                image: 'https://claudia.abril.com.br/wp-content/uploads/2019/05/destaque-homem-maio.jpg',
                name: 'Roberto Jefferson Monteiro Francisco',
                description: 'to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
                crp: '05/23212',
                rating: 2,
                specializations: ['Terapia', 'Psicanalise'],
                language: 'Português',
                price: '100.00',
                is_psic: true
            },
            {
                image: 'https://img.huffingtonpost.com/asset/5c6ab0092500003502c88ce6.jpeg?cache=Idejm45rNe&ops=scalefit_630_noupscale',
                name: 'Marcia Roberta Vasconcellos',
                description: 'to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
                crp: '05/23212',
                rating: 1,
                specializations: ['Terapia', 'Psicanalise'],
                language: 'Português',
                price: '100.00',
                is_psic: true
            }
        ]
    }


    // const allUsers = useSelector((state) => state.users.allUsers);
    // console.log(allUsers);
    return (
        <StyledMain>
            <Row>
                <StyledColSearch xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className='input-search'>
                        <input type='text' name='search' placeholder='Digite a especialidade' />
                        <button type='submit'>Buscar</button>
                    </div>
                </StyledColSearch>

                <StyledColCards xs={24} sm={24} md={24} lg={24} xl={24}>
                    {
                        dataPsychologist.users.filter(f => f.is_psic).map((item) => {
                            return (
                                <CardPsychologist
                                    image={item.image}
                                    name={item.name}
                                    description={item.description}
                                    crp={item.crp}
                                    rating={item.rating}
                                    specializations={item.specializations}
                                    language={item.language}
                                    price={item.price}
                                />
                            );

                        })
                    }
                </StyledColCards>
            </Row>
        </StyledMain>
    );
}

export default Psychologist;