import styled from 'styled-components';
import { Col } from 'antd';

export const StyledFooterContainer = styled.footer`
  padding: 0 15% 0 15%;
  margin-bottom: 20px;
  
  h4{
    font-weight: bold;
  }

  a{
    display: block;
    margin-bottom: 7px;
    color: #6e6e6e;
  }
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
`;

export const StyledLogoCotainer = styled.a`
  img{
    max-width: 200px;
    max-height: 150px;
    width: auto;
    height: auto;
    margin: 20px 0 20px 0;
  }
`;
