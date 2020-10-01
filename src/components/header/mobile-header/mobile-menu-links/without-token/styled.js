import styled from "styled-components";

export const StyledMobileMenuListWithoutTokenHeader = styled.div`
  background-color: #70a3ef;
  position: absolute;
  top: 70px;
  right: 2px;
  min-width: 150px;
  height: 150px;
  border: 2px solid #585858;
  border-top: 0.5px solid #585858;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  z-index: 5;

  .mobile-list {
    color: whitesmoke;
    margin: 10px 15px 5px;
  }

  .mobile-list:hover {
    cursor: pointer;
    scale: 0.9;
    transition: 0.2s;
  }

  .mobile-menu-list-whithout-token {
    transition: 2s;
  }
`;
