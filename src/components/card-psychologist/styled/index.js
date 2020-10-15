import styled from 'styled-components';

const StyledContainer = styled.div`
    width: 550px;
    margin: 1.25rem 0;
    border: 3px solid #70A3EF;
    border-radius: 5px;
    display: flex;
    background-color: white;
    box-sizing: border-box;
    padding: 35px 0 35px 0;

    h4{
        font-size: 18px
    }
    
    h3, h4, h5, h6{
        font-weight: bold;
        margin-bottom: 10px;
    }

    h5{
        font-size: 16px;
    }

    p{
        font-size: 14px;
    }

    .card-psychologist-description::after{
        content: '...';
    }

    .container-img{
        width: 35%;
        text-align: center;
        margin: 0 5px 0 5px;

        img{
            border: 3px solid #70A3EF;
            width: 160px;
            height: 160px;
            border-radius: 50%;
        }

        #crp{
            color: #70A3EF;
            font-size: 16px;
            margin: 15px 0 15px 0;
            font-weight: bold;
        }

        h5{
            margin: 10px 0 15px 0;
        }

        #price-per-hour{
            font-size: 14px; 
        }
    }

    span{
        display: block;
    }

    .container-abstract {
        width: 65%;
        margin-right: 20px;
        margin-left: 10px;

        p{
            color: #6E6E6E;
            margin-bottom: 7px;
        }

        .container-btn{
            margin-top: 15px;
        }
    }


    @media (max-width: 1180px) {
        width: 530px;
    }

    @media (max-width: 1100px) {
        width: 470px;
    }

    @media (max-width: 950px){
        display: block;
        height: auto;
        padding: 35px; 

        h4{
            margin-top: 10px;
        }
        
        .container-img{
            width: 100%;

            #price-per-hour{
                padding-bottom: 15px; 
            }
        }

        .container-abstract{
            width: 100%;
            text-align: left;

            .container-btn{
                display: flex;
                justify-content: center
            }
        } 
    }
`;

export default StyledContainer;