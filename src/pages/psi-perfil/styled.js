import styled from "styled-components";

export const MainWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: unset;
  justify-content: center;

  /* div.col {
    height: 50px;
  } */

  div.col-left {
    background-color: blue;
  }

  .col-center {
    background-color: yellow;
  }

  .col-space {
    background-color: gray;
  }

  .col-right {
    background-color: orange;
  }

  .row-info {
    /* height: 500px; */
  }
`;

export const PsiCard = styled.div`
  flex-direction: column;
  justify-content: center;
  background-color: blue;

  .card-avatar {
    display: flex;
    justify-content: center;
  }

  .img-avatar {
    width: 190px;
    border-radius: 50%;
  }

  .card-text {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .crp {
    color: #70a3ef;
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
