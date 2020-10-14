import { Rate } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";

export const MainContainer = styled.div`
  /* margin: 0 auto;
  max-width: 1200px; */
  width: 100%;
  padding-top: 60px;
  min-height: auto;
  background-color: #fbfbfb;
  @media (max-width: 768px) {
    padding-top: 30px;
  }
`;

export const MainWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: unset;
  justify-content: center;
  font-family: "Roboto", sans-serif;

  .ant-input[disabled] {
    cursor: default;
  }

  .card-wrapper {
    width: fit-content;
    margin: 0 auto;
  }

  .psic-video {
    text-align: center;
  }
  p.video-tag {
    text-align: start;
  }

  p.input-title {
    color: #474747;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 17px;
  }

  .form-text-area {
    color: #9e9e9e;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    /* margin-bottom: 17px;  */
  }

  .title-agenda {
    max-width: 900px;
    margin: 0px auto 15px auto;
  }

  .title-p-agenda {
    font-weight: 700;
    font-size: 36px;
    color: #585858;
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
    padding-left: 30px;
  }

  .col-space {
    /* background-color: gray; */
  }

  .col-right {
    padding-left: 30px;
  }

  .row-info,
  .row-work-days {
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
  }

  /* .form-btn {
    background-color: #053559;
    color: #ffffff;
    margin: 8px;
    border: 2px solid #053559;
    &:hover {
      color: #70a3ef;
      border: 2px solid #70a3ef;
    }
  } */

  .row-calendar {
    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    .col-center {
      padding-left: 0px;
    }

    .col-right {
      padding-left: 0px;
    }

    .col-work-days {
      padding-left: 0px;
    }

    .title-p-agenda {
      font-size: 28px;
    }
  }

  @media (max-width: 576px) {
    p.input-title {
      font-size: 16px;
      line-height: 16px;
      margin-bottom: 14px;
    }

    .form-text-area {
      font-size: 16px;
      line-height: 20px;
    }
    .title-p-agenda {
      font-size: 28px;
    }
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
    width: 226px;
    height: 226px;
    border-radius: 50%;
    border: 4px solid #70a3ef;
  }

  .card-text {
    text-align: center;
  }
  .card-text p {
    /* line-height: 2rem; */
  }

  p.crp {
    color: #70a3ef;
    font-weight: 700;
    font-size: 18px;
    margin: 36px auto 15.3px auto;
  }

  p.rating {
    margin: 0px auto 30px auto;
  }

  p.price-tag {
    color: #474747;
    font-weight: 700;
    font-size: 20px;
    margin-top: 0px;
    /* margin-bottom: -2px; */
  }

  div.card-price {
    margin: 24px auto 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: center;
  }
  span.price-label {
    color: #474747;
    font-weight: 400;
    font-size: 18px;
    /* line-height: 29px; */
  }
  .form-price-area {
    color: #474747;
    font-weight: 400;
    font-size: 18px;
    /* line-height: 21px; */
    width: 87px;
    padding-top: 0;
    /* padding: 0 0 0 5px; */
  }

  @media (max-width: 992px) {
    .img-avatar {
      width: 183px;
      height: 183px;
    }
    p.crp {
      font-size: 16px;
      /* margin: 36px auto 34px auto; */
    }
    p.price-tag {
      font-size: 16px;
      /* margin-top: 0px; */
    }
    span.price-label {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;

    .img-avatar {
      width: 140px;
      height: 141px;
    }
    .card-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-left: 15px;
    }
    p.crp {
      margin: 13px auto 10px 0px;
    }
    div.card-price {
      margin: 21px auto 0 auto;
    }
    p.rating {
      margin: 0px auto 0px auto;
    }
  }

  @media (max-width: 576px) {
    .img-avatar {
      width: 96px;
      height: 96px;
    }
    p.crp {
      margin: 8px auto 0px auto;
    }
    div.card-price {
      margin: 0px auto 0 auto;
    }
    p.rating {
      margin: 0px auto 0px auto;
    }
  }
`;

export const StyledWorkForm = styled.div`
  div.ant-form-item-label {
    text-align: left;
  }
  .ant-form-item-control {
    flex-wrap: nowrap;
  }
  .ant-form-item-control-input-content {
    display: flex;
    flex-direction: row;
  }
  .ant-form-item-control-input-content > button {
    margin: 10px;
  }

  @media (max-width: 576px) {
    .work-form-btn-group {
      width: fit-content;
      margin: 0 auto;
    }
    .ant-form-item-control {
      margin: 0;
    }
  }
`;

export const StyledRate = styled(Rate)`
  font-size: 28px;

  @media (max-width: 992px) {
    font-size: 24px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 576px) {
    font-size: 18px;
  }
`;
export const StyledPsicNameCenter = styled.div`
  font-weight: 700;
  font-size: 36px;
  color: #585858;
  line-height: 36px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const StyledPsicName = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: unset;
    text-align: start;
    font-weight: 700;
    font-size: 28px;
    color: #585858;
  }
  @media (max-width: 576px) {
    display: unset;
    font-size: 20px;
  }
`;
