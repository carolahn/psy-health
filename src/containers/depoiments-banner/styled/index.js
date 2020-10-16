import styled from 'styled-components';
import { Carousel } from 'antd';

export const StyledDivContainer = styled.div`
    width: 100%;
    background-color: #F3F3F3;

    h1{
        color: #717171;
        text-align: center;
        margin-top: 14px;
    }
`;

export const StyledCarousel = styled(Carousel)`
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

export const StyledInnerCarousel = styled.div`
    width: 100%;
    display: flex !important;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 25px;
`;