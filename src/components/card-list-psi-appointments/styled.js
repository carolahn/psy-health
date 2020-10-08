import styled from "styled-components";

export const CardListWrapper = styled.div`
  .special-list {
    height: 324px;
    overflow-y: ${(props) => props.overflow};
    overflow-x: hidden;
    /* position: relative; */
  }
  .btn-more {
    text-decoration: none;
    background-color: unset;
    border: none;
    outline: none;
    color: #70a3ef;
    font-weight: 700;
    font-size: 18px;
    cursor: pointer;
    width: 550px;
  }
  .btn-container {
    position: absolute;
    right: 0;
    top: 73px;
    max-width: 550px;
    border: 2px solid blue;
  }
  @media (max-width: 1100px) {
    .btn-container {
      position: absolute;
      margin: 0 auto;
      top: 60px;
    }
  }
  @media (max-width: 992px) {
    .btn-container {
      position: absolute;
      margin: 0 auto;
    }
  }
  /* @media (max-width: 576px){}
  @media (max-width: 500px){} */
`;

export const SpecialList = styled.div`
  height: 324px;
  overflow: ${(props) => props.overflow};
`;
