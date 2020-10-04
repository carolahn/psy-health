import styled from "styled-components";

const SearchContainer = styled.main`
  width: 70vw;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  .search-input {
    margin-top: 2.50rem;
    box-sizing: border-box;
    font-size: 20px;

    width: 30vw;
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
    margin-top: 2.5rem;
    box-sizing: border-box;
    border: none;
    background-color: #053559;
    width: 10vw;
    height: 50px;
    color: #fff;
    font-size: 19px;
    font-weight: 600;
    outline: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .filter-specialist {
    width: 120px;
  }

  .filter-specificity {
    width: 200px;
  }

  .ant-select {
    margin: 1.25rem 2.50rem;
  }

  .card-list {
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .card {
    width:30vw;
    height:450px;
    margin: 1.25rem;
    border: 2px solid green;
  }
`;

export default SearchContainer;
