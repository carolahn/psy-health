import styled from "styled-components";

export const MainWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: unset;
  justify-content: center;

  div.col {
    height: 50px;
  }

  div.col-left {
    background-color: blue;
  }

  .col-center {
    background-color: yellow;
  }

  .col-space {
    background-color: gray;
  }

  .col-right {
    background-color: orange;
  }
`;
