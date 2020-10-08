import styled from "styled-components";

export const StyledCard = styled.div`
  max-width: 550px;
  height: 86px;
  margin-bottom: 25px;
  background: #fafafa;
  border-radius: 5px;
  border: 2px solid #70a3ef;
  font-family: "Roboto", sans-serif;
  color: #6e6e6e;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  .col-container {
    height: 86px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .card-title {
    color: #585858;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }
  @media (max-width: 1100px) {
    font-size: 15px;
    .card-title {
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
    }
  }

  @media (max-width: 576px) {
    /* max-width: 260px; */
    height: 70px;
    font-size: 13px;
    line-height: 17px;
    .col-container {
      height: 70px;
    }
    .card-title {
      font-weight: 700;
      font-size: 16px;
      line-height: 21px;
    }
  }

  @media (max-width: 500px) {
    min-width: 260px;
    height: 50px;
    margin-bottom: 15px;
    font-size: 9px;
    line-height: 11px;
    .col-container {
      height: 50px;
    }
    .card-title {
      font-weight: 700;
      font-size: 11px;
      line-height: 13px;
    }
  }
`;
