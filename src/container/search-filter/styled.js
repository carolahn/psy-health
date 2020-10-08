import styled from "styled-components";

const StyledSearchFilter = styled.div`
  width: 40vw;
  display: flex;
  place-content: center;

  .filter {
    width: 180px;
  }

  .ant-select {
    margin: 1.25rem 2.5rem;
    text-align: center;
  }

  @media (max-width: 1600px) {
    width: 50vw;
  }

  @media (max-width: 1280px) {
    width: 60vw;
  }

  @media (max-width: 1024px) {
    width: 70vw;
  }

  @media (max-width: 540px) {
    .ant-select {
      margin: 1.25rem 0.625rem;
      
    }
  }

  @media (max-width: 420px) {
    width: 85vw;

    .ant-select {
      font-size: 14px;
    }
  }


`;

export default StyledSearchFilter;
