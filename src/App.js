import React from "react";
import styled from "styled-components";

import "antd/dist/antd.css";
<<<<<<< HEAD
=======

import BannerOperation from "./components/banner-operation";
import BannerSearch from "./components/banner-search";
import CardPatientConsultation from "./components/card-patient-consultation";
>>>>>>> 1004ef8981b22414c86f457e97f69f6e6ac36973
import Footer from "./components/footer";
import Header from "./components/header/index.jsx";
import PatientPage from "./pages/patient-page";
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
  align-items: center;
`;
