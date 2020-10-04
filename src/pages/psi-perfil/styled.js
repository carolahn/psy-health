import { Form } from "antd";
import styled from "styled-components";

export const MainWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: unset;
  justify-content: center;

  .psic-video {
    text-align: center;
  }
  p.video-tag {
    text-align: start;
  }

  p.input-title {
    font-weight: bold;
    color: #545454;
  }

  .form-text-area {
    color: #8d8d8d;
  }
  .title-agenda {
    max-width: 900px;
    margin: 0px auto 15px auto;
  }

  .title-p-agenda {
    font-weight: bold;
    font-size: 1.8rem;
    margin-left: 30px;
  }

  div.col-left {
    /* background-color: blue; */
    /* display: flex;
    flex-direction: column;
    justify-content: center; */

    /* margin-right: 30px; */
  }

  .col-center {
    /* background-color: yellow; */
    padding-left: 30px;
    @media (max-width: 768px) {
      padding-left: 0px;
    }
  }

  .col-space {
    /* background-color: gray; */
  }

  .col-right {
    /* background-color: orange; */
    padding-left: 30px;
    @media (max-width: 768px) {
      padding-left: 0px;
    }
  }

  .row-info,
  .row-work-days {
    /* margin: 0 auto; */
    padding: 0 30px;
  }

  .row-work-days {
    margin-top: 20px;
    margin-bottom: 10px;
    @media (max-width: 1199px) {
      margin-top: 30px;
    }
  }

  .col-work-days {
    padding-left: 30px;
    @media (max-width: 768px) {
      padding-left: 0px;
    }
  }

  .form-btn {
    background-color: #053559;
    color: #ffffff;
    margin: 8px;
    border: 2px solid #053559;
    &:hover {
      color: #70a3ef;
      border: 2px solid #70a3ef;
    }
  }

  .row-calendar {
    margin-bottom: 30px;
  }

  @media (max-width: 460px) {
    iframe.psic-video {
      width: 260px;
      height: 145px;
    }
  }
`;

export const PsiCard = styled.div`
  flex-direction: column;
  justify-content: center;

  .card-avatar {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .img-avatar {
    width: 178px;
    height: 178px;
    border-radius: 50%;
    border: 3px solid #70a3ef;
  }

  .card-text {
    text-align: center;
  }
  .card-text p {
    /* line-height: 2rem; */
  }

  p.crp {
    color: #70a3ef;
    margin-top: 9px;
    font-weight: bold;
  }

  p.rating {
    margin-top: 8px;
  }

  p.price-tag {
    margin-top: 8px;
    font-weight: bold;
    margin-bottom: -2px;
  }

  p.card-price {
    width: 109px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;

    .card-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-left: 15px;
    }
  }

  @media (max-width: 500px) {
    .img-avatar {
      width: 110px;
      height: 110px;
    }
    .ant-rate {
      font-size: 14px;
    }
  }
`;

export const StyledWorkForm = styled(Form)`
  div.ant-form-item-label {
    text-align: left;
  }
`;
