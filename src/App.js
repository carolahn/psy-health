import React from "react";
import styled from "styled-components";

import Footer from "./components/footer";
import Header from "./components/header/index.jsx";
import Routes from "./routes/index";


import Psychologist from '../src/pages/psychologist';


const App = () => {
  return (
    <BodyFrame>
      <Header />
      <Routes />
      <Psychologist />
      <Footer />
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
  align-items: center;
`;
