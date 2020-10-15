import styled from "styled-components";
import "antd/dist/antd.css";

export const MainContainer = styled.div`
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  min-height: auto;
  background-color: #fbfbfb;
  @media (max-width: 768px) {
    padding-top: 30px;
    padding-bottom: 60px;
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
