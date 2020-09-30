import styled from 'styled-components';
import { Col, Row } from 'antd';

export const StyledFooterContainer = styled.footer`
  h4{
    font-weight: bold;
  }

  a{
    display: block;
    margin-bottom: 7px;
    color: #6e6e6e;
  }

  .developed-by{
    background-color: #70A3EF;
    display: flex;
    flex-wrap: wrap;	
    align-items: center;
    justify-content: center;
    color: #F3F3F3;	
    margin: 0;
    padding: 5px 0 5px 0;

    .copy{
      font-weight: bold;
      margin-right: 4rem;

      @media(max-width: 569px){ 
        margin-right: 0;
      }
    }

    .developed-by-text{
      margin-right: 0.5rem;
    }

    a{
      display: inline;
      color: #F3F3F3;
      font-weight: bold;
      margin-bottom: 0;
      margin-right: 0.2rem;
      margin-left: 0.2rem;		
    }
  }
`;

export const StyledRow = styled(Row)`
  margin: 0 15% 0 15%;
`;

export const StyledCol = styled(Col)`
  text-align: center;

  @media(max-width: 575.98px){ 
    text-align: left; 
  }

  .container-box-left{
    display: block;
    text-align: left;
  }

  .container-box-middle{
    display: inline-block;
    text-align: left;
  }
`;

export const StyledContainerColSocial = styled(Col)`
  text-align: right;

  @media(max-width: 575.98px){ 
    text-align: left; 
  }

  div{
    display: inline-block;
    text-align: center;
  }

  a{
    font-size: 40px;
    margin: 0;
    line-height: 0;
    color: #053559;
  }
`;

export const StyledLogoCotainer = styled.a`
  img{
    max-width: 150px;
    max-height: 100px;
    width: auto;
    height: auto;
    margin: 10px 0 10px 0;
  }
`;
