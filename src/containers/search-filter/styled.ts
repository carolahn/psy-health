import styled from "styled-components";

const StyledSearchFilter = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  place-content: center;

  .search-bar {
    margin-top: 2.5rem;
    margin-bottom: 1.25rem;
    display: flex;
    place-content: center;
  }

  .filter {
    display: flex;
    justify-content: space-around;
  }

  .ant-select {
    width: 160px;
    text-align: center;
    border: 2px solid #70a3ef;
    border-radius: 5px;
  }

  
  .ant-select-selector {
    text-transform: capitalize;
    border-radius:none !important;
    border: none !important;
  }

  .search-button {
    box-sizing: border-box;
    border: none;
    background-color: #053559;
    width: 25%;
    height: 50px;
    color: #fff;
    font-size: 19px;
    font-weight: 600;
    outline: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }


  @media (max-width: 1600px) {
    width: 50vw;
  }

  @media (max-width: 1280px) {
    width: 60vw;
  }

  @media (max-width: 1024px) {
    width: 80vw;
  }

  @media (max-width: 540px) {
    .ant-select {
      margin: 0.625rem 0.4rem;
    }

    .search-bar {
      margin-bottom: 0;
    }
  }

  @media (max-width: 420px) {
    width: 85vw;

    .ant-select {
      font-size: 14px;
    }
  }

  @media (max-width: 320px) {
    .select-filter {
      width: 85px;
    }
  }
`;

export default StyledSearchFilter;
