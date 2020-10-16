import styled from "styled-components";

const SearchContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fbfbfb;

  @media (max-width: 1024px) {
    .search-button {
      font-size: 17px;
    }

    .search-input {
      font-size: 17px;
    }
  }

  @media (max-width: 540px) {
    .search-button {
      font-size: 14px;
    }

    .search-input {
      font-size: 14px;
    }
  }

  @media (max-width: 420px) {
    .search-bar {
      width: 85vw;
    }
  }
`;

export default SearchContainer;
