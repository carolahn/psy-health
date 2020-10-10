import styled from 'styled-components';

const StyledContainer = styled.div`
    width: 450px;
    margin: 1.25rem 0;
    border: 2px solid #70A3EF;
    border-radius: 3px;
    display: flex;
    background-color: white;
    
    h3, h4, h5, h6{
        font-weight: bold;
        margin-bottom: 10px;
    }

    .container-img{
        padding-top: 25px;
        width: 35%;
        text-align: center;
        margin: 0 5px 0 5px;

            #crp{
                color: #70A3EF;
                font-size: 0.7rem;
                margin: 15px 0 15px 0;
                font-weight: bold;
            }

            h5{
                margin: 10px 0 15px 0;
            }

            #price-per-hour{
                font-size: 0.8rem; 
            }
    }

    img{
        border: 1px solid #70A3EF;
        width: 125px;
        height: 125px;
        border-radius: 50%;

    }

    span{
        display: block;
    }

    .container-abstract {
        width: 65%;
        padding-top: 20px;
        margin-right: 20px;

        p{
            font-size: 0.7rem;
            color: #6E6E6E;
            margin-bottom: 7px;
        }

        button{
            margin: 10px 0 25px 0;
            width: 100%;
            border-radius: 4px;
            background-color: #053559;
            border: 1px solid #053559;
            color: white;
            font-weight: bold;
            font-size: 0.8rem;
            padding: 3px 0 3px 0;
            cursor: pointer;
        }
    }

    @media (max-width: 575.98px){
        display: block;
        height: auto; 

        .container-img{
            width: 100%;
        }

        .container-abstract{
            width: 100%;
            text-align: center;
        } 
    }
`;

export default StyledContainer;