import React from "react";
import styled from "styled-components";

import "antd/dist/antd.css";

import BannerOperation from "./components/banner-operation";
import BannerSearch from "./components/banner-search";
import CardPatientConsultation from "./components/card-patient-consultation";
import FooterContainer from "./containers/footer";
import Header from "./components/header/index.jsx";
import PatientPage from "./pages/patient-page";
import Routes from "./routes/";

const App = () => {
  return (
    <BodyFrame>
      <Header />
      <Routes />
      <FooterContainer />
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
`;
