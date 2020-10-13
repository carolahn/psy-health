import styled from 'styled-components';

const StyledContainer = styled.div`
    width: 550px;
    margin: 1.25rem 0;
    border: 2px solid #70A3EF;
    border-radius: 5px;
    display: flex;
    background-color: white;
    box-sizing: border-box;

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

    .container-img{
        padding-top: 25px;
        width: 35%;
        text-align: center;
        margin: 0 5px 0 5px;

        img{
            border: 1px solid #70A3EF;
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
        padding-top: 20px;
        margin-right: 20px;

        p{
            color: #6E6E6E;
            margin-bottom: 7px;
        }

        button{
            margin: 10px 0 25px 0;
            height: 50px;
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

    @media (max-width: 950px){
        display: block;
        height: auto;
        padding: 35px; 

        h4{
            margin-top: 10px;
        }
        
        .container-img{
            width: 100%;

            img{
                width: 140px;
                height: 140px;
            }
        }

        .container-abstract{
            width: 100%;
            text-align: left;

            .container-btn{
                text-align: center;

                button{
                    width: 80%;
                }
            }
            
        } 
    }
`;

export default StyledContainer;