import styled from "styled-components";

export const CardListWrapper = styled.div`
  .special-list {
    height: 324px;
    overflow-y: ${(props) => props.overflow};
    overflow-x: hidden;
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
    text-align: end;
  }
  .btn-container {
    /* relative é next-appointments */
    position: absolute;
    right: 0;
    top: 73px;
    max-width: 550px;
  }
  @media (max-width: 1100px) {
    .btn-container {
      top: 60px;
    }
    .btn-more {
      font-size: 16px;
    }
  }
  @media (max-width: 992px) {
    .btn-container {
      right: auto;
      width: 550px;
      text-align: end;
    }
  }

  @media (max-width: 624px) {
    .btn-container {
      right: 0;
      top: 60px;
      width: auto;
      margin-right: 0px;
    }
  }
  @media (max-width: 576px) {
    .btn-more {
      font-size: 14px;
    }
    .btn-container {
      top: 48px;
    }
  }
  @media (max-width: 500px) {
    .btn-more {
      font-size: 11px;
    }
    .btn-container {
      top: 40px;
    }
  }
`;

export const SpecialList = styled.div`
  height: 324px;
  overflow: ${(props) => props.overflow};
`;
