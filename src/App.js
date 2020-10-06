import React from "react";
import styled from "styled-components";

import Header from "./components/header/index.jsx";
import Routes from "./routes/index";

const App = () => {
  return (
    <BodyFrame>
      <Header />
      <Routes />
    </BodyFrame>
  );
};

export default App;

const BodyFrame = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  /* align-items: center; */
`;
