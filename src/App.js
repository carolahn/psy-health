import React from "react";

import "./App.css";
import BannerOperation from "./components/banner-operation";
import BannerSearch from "./components/banner-search";
import CardPatientConsultation from "./components/card-patient-consultation";
import Footer from "./components/footer";
import Header from "./components/header";
import Routes from "./routes";

const App = () => {
  return (
    <div>
      <CardPatientConsultation />
    </div>
  );
};

export default App;
