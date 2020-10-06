import styled from "styled-components";

const SearchContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  .search-bar {
    margin-top: 2.5rem;
    display: flex;
    width: 40vw;
  }

  .search-input {
    box-sizing: border-box;
    font-size: 20px;

    width: 75%;
    height: 50px;
    outline: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border: 2px solid #70a3ef;
    border-right: none;
    padding-left: 20px;
    ::-webkit-input-placeholder {
      color: #c8c8c8;
    }

    :-moz-placeholder {
      /* Firefox 18- */
      color: #c8c8c8;
    }

    ::-moz-placeholder {
      /* Firefox 19+ */
      color: #c8c8c8;
    }

    :-ms-input-placeholder {
      color: #c8c8c8;
    }
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
    .search-bar {
      width: 50vw;
    }
  }

  @media (max-width: 1280px) {
    .search-bar {
      width: 60vw;
    }
  }

  @media (max-width: 1024px) {
    .search-bar {
      width: 70vw;
    }

    .search-button {
      font-size: 17px;
    }

    .search-input {
      font-size: 17px;
    }
  }

  @media (max-width: 540px) {

    .search-bar {
      width: 80vw;
    }

    .search-button {
      font-size: 14px;
    }

    .search-input {
      padding-left: 10px;
      font-size: 14px;
      padding-right:10px;
    }
  }

  @media (max-width: 420px) {
    .search-bar {
      width: 85vw;
    }

    
  }
`;

export default SearchContainer;
