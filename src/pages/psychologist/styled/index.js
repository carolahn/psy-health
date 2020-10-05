import styled from 'styled-components';
import { Col } from 'antd';

export const StyledColSearch = styled(Col)`
    text-align: center;
`;

export const StyledColCards = styled(Col)`
    margin-bottom: 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 40px;
    row-gap: 40px;
`;

export const StyledMain = styled.main`
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
