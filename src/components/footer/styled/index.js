import { Col, Row } from "antd";
import styled from "styled-components";

export const StyledFooterContainer = styled.footer`
  background-color: white;
  padding-top: 15px;

  h4 {
    font-weight: bold;
    font-size: 18px;
  }

  a {
    display: block;
    margin-bottom: 7px;
    color: #6e6e6e;
    font-size: 18px;
  }

  .developed-by {
    background-color: #70a3ef;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    color: #f3f3f3;
    margin: 15px 0 0 0;
    padding: 5px 0 5px 0;

    div{
      @media (max-width: 575.98px) {
        display: none;
      }
    }

    .copy {
      font-weight: bold;
      margin-right: 4rem;
      text-align: center;	

      @media (max-width: 576px) {
        display: block;
        width: 100%;
        margin-right: 0;
      }
    }

    .developed-by-text {
      margin-right: 0.5rem;

      @media (max-width: 768px) {
        display: block;
      }
    }

    a {
      display: inline;
      color: #f3f3f3;
      font-weight: bold;
      margin-right: 0.2rem;
    }

    .e-text{
      margin-right: 0.2rem;
    }
  }
`;

export const StyledRow = styled(Row)`
  margin: 0 15% 0 15%;
`;

export const StyledCol = styled(Col)`
  text-align: center;

  @media (max-width: 1200px) {
    text-align: left;
  }

  .container-box-middle {
    display: inline-block;
    text-align: left;
  }
`;

export const StyledContainerColSocial = styled(Col)`
  text-align: right;

  @media (max-width: 1200px) {
      text-align: left;
  }

  div {
    display: inline-block;
    text-align: center;

    @media (max-width: 1200px) {
      text-align: left;
    }
  }

  a {
    font-size: 40px;
    margin: 0;
    line-height: 0;
    color: #053559;
  }
`;

export const StyledContainerLeft = styled(Col)`
  .container-box-left {
    display: inline-block;
    text-align: left;
  }
`;

export const StyledLogoCotainer = styled.a`
  img {
    max-width: 126px;
    max-height: 75px;
    width: auto;
    height: auto;
    margin: 10px 0 10px 0;
  }
`;
