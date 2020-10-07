import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import BannerOperation from "./components/banner-operation";
import BannerSearch from "./components/banner-search";
import CardPatientConsultation from "./components/card-patient-consultation";
import Footer from "./components/footer";
import Header from "./components/header/index.jsx";
import PatientPage from "./pages/patient-page";
import Routes from "./routes/index";

const App = () => {
  const user = useSelector((state) => state.login.user);
  console.log(user);
  return (
    <div>
      <PatientPage />
    </div>
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
