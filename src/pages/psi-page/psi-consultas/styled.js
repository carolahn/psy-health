import styled from "styled-components";
import "antd/dist/antd.css";

export const MainContainer = styled.div`
  /* margin: 0 auto;
  max-width: 1200px; */
  width: 100%;
  padding-top: 60px;
  @media (max-width: 576px) {
    padding-top: 40px;
  }
  @media (max-width: 500px) {
    padding-top: 35px;
  }
`;

export const MainWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px 0 30px;
  display: flex;
  flex-direction: column;
  align-items: unset;
  justify-content: center;
  font-family: "Roboto", sans-serif;

  .next-appointments {
    margin-right: 30px;
  }

  .past-appointments {
    margin-left: 30px;
  }
  .appointments-title {
    max-width: 550px;
    font-weight: 700;
    color: #053559;
    font-size: 36px;
    line-height: 42px;
    margin-bottom: 60px;
  }

  @media (max-width: 1100px) {
    .appointments-title {
      font-size: 30px;
      line-height: 38px;
      margin-bottom: 50px;
    }
  }

  @media (max-width: 992px) {
    .next-appointments {
      margin-right: 0px;
      margin-bottom: 60px;
    }

    .past-appointments {
      margin-left: 0px;
      margin-bottom: 60px;
    }

    .appointments-title {
      min-width: 260px;
      margin: 0 auto;
      margin-bottom: 50px;
    }
    .card-list-psi-appointments {
      margin: 0 auto;
    }
  }

  @media (max-width: 576px) {
    .appointments-title {
      font-size: 25px;
      line-height: 32px;
      margin-bottom: 40px;
      /* margin-top: 40px; */
    }
    .next-appointments {
      margin-bottom: 50px;
    }

    .past-appointments {
      margin-bottom: 50px;
    }
  }
  @media (max-width: 500px) {
    .appointments-title {
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 35px;
      /* margin-top: 35px; */
    }
    .next-appointments {
      margin-bottom: 40px;
    }

    .past-appointments {
      margin-bottom: 40px;
    }
  }
`;
