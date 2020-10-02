import React from "react";
import "./App.css";

import Footer from "./components/footer";
import Header from "./components/header";
import PsychologistPage from "./pages/psychologist-page";
import Routes from "./routes";

const App = () => {
  return (
    <div>
      <Header />
      <Routes />
      <Footer />
      <PsychologistPage />
    </div>
  );
};

export default App;
