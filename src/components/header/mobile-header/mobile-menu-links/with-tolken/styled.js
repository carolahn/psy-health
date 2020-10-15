import styled from "styled-components";

export const StyledMobileMenuListWithTokenHeader = styled.div`
  background-color: #053559;
  position: absolute;
  top: 70px;
  right: 2px;
  min-width: 200px;
  height: 200px;
  border-radius: 5px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  z-index: 5;
  font-size: 16px;

  .mobile-list {
    color: whitesmoke;
    margin: 10px 15px 5px;
  }

  .mobile-list:hover {
    cursor: pointer;
    scale: 0.9;
    transition: 0.2s;
  }
`;
