import React from 'react';
import CardPsychologist from '../components/card-psychologist';
import styled from 'styled-components';
import { Row, Col } from 'antd';

const Psychologist = () => {


    // Simula dos dados dos psicologos.
    const dataPsychologist = [
        {
            imgUrl: 'https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo.jpg',
            name: 'Marcia Roberta Vasconcellos',
            abstract: 'typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            crp: '05/23212',
            rating: 3,
            specialty: ['Terapia de casal', 'Psicanalise', 'Psicossomática'],
            languages: ['Português', 'Inglês'],
            value: { price: 120.00, perHour: 50 }
        },
        {
            imgUrl: 'https://claudia.abril.com.br/wp-content/uploads/2019/05/destaque-homem-maio.jpg',
            name: 'Roberto Jefferson Monteiro Francisco',
            abstract: 'to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
            crp: '05/23212',
            rating: 2,
            specialty: ['Terapia', 'Psicanalise'],
            languages: ['Português'],
            value: { price: 100.00, perHour: 50 }
        },
        {
            imgUrl: 'https://img.huffingtonpost.com/asset/5c6ab0092500003502c88ce6.jpeg?cache=Idejm45rNe&ops=scalefit_630_noupscale',
            name: 'Marcia Roberta Vasconcellos',
            abstract: 'to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
            crp: '05/23212',
            rating: 1,
            specialty: ['Terapia', 'Psicanalise'],
            languages: ['Português'],
            value: { price: 100.00, perHour: 50 }
        },
        {
            imgUrl: 'https://img.huffingtonpost.com/asset/5c6ab0092500003502c88ce6.jpeg?cache=Idejm45rNe&ops=scalefit_630_noupscale',
            name: 'Marcia Roberta Vasconcellos',
            abstract: 'to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
            crp: '05/23212',
            rating: 1,
            specialty: ['Terapia', 'Psicanalise'],
            languages: ['Português'],
            value: { price: 100.00, perHour: 50 }
        },
        {
            imgUrl: 'https://img.huffingtonpost.com/asset/5c6ab0092500003502c88ce6.jpeg?cache=Idejm45rNe&ops=scalefit_630_noupscale',
            name: 'Marcia Roberta Vasconcellos',
            abstract: 'to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
            crp: '05/23212',
            rating: 1,
            specialty: ['Terapia', 'Psicanalise'],
            languages: ['Português'],
            value: { price: 100.00, perHour: 50 }
        },
        {
            imgUrl: 'https://img.huffingtonpost.com/asset/5c6ab0092500003502c88ce6.jpeg?cache=Idejm45rNe&ops=scalefit_630_noupscale',
            name: 'Marcia Roberta Vasconcellos',
            abstract: 'to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
            crp: '05/23212',
            rating: 1,
            specialty: ['Terapia', 'Psicanalise'],
            languages: ['Português'],
            value: { price: 100.00, perHour: 50 }
        },
        {
            imgUrl: 'https://img.huffingtonpost.com/asset/5c6ab0092500003502c88ce6.jpeg?cache=Idejm45rNe&ops=scalefit_630_noupscale',
            name: 'Marcia Roberta Vasconcellos',
            abstract: 'to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
            crp: '05/23212',
            rating: 1,
            specialty: ['Terapia', 'Psicanalise'],
            languages: ['Português'],
            value: { price: 100.00, perHour: 50 }
        },
        {
            imgUrl: 'https://img.huffingtonpost.com/asset/5c6ab0092500003502c88ce6.jpeg?cache=Idejm45rNe&ops=scalefit_630_noupscale',
            name: 'Marcia Roberta Vasconcellos',
            abstract: 'to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
            crp: '05/23212',
            rating: 1,
            specialty: ['Terapia', 'Psicanalise'],
            languages: ['Português'],
            value: { price: 100.00, perHour: 50 }
        }
    ]


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
                        dataPsychologist.map((item) => {
                            return (
                                <CardPsychologist
                                    imgUrl={item.imgUrl}
                                    name={item.name}
                                    abstract={item.abstract}
                                    crp={item.crp}
                                    rating={item.rating}
                                    specialty={item.specialty}
                                    languages={item.languages}
                                    value={item.value}
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

const StyledColSearch = styled(Col)`
    text-align: center;
`;

const StyledColCards = styled(Col)`
    margin-bottom: 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 40px;
    row-gap: 40px;
`;

const StyledMain = styled.main`
    background-color: #F3F3F3;

    .input-search{
        margin: 35px 0 35px 0;
        border: 1px solid #70a3ef;
        border-radius: 3px;
        display: inline-block;
        font-size: 0.7rem;
        
        input{
            border: none;
            width: 400px;
            padding: 4px 0 4px 9px;
            outline: none;

            @media (max-width: 992px){
                width: 300px;
            }

            @media (max-width: 575.98px){
                width: 200px;
            }
        }

        button{
            border: none;
            background-color: #053559;
            width: 100px;
            padding: 4px 0 4px 0;
            color: white;
            outline: none;
            cursor: pointer;
        }
    }
`;
