import React from "react";
import "./App.css";

import Footer from "./components/footer";
import Header from "./components/header";
import Routes from "./routes";
import Psychologist from './pages/psychologist';

const App = () => {
  return (
    <div>
      <Header />
      <Routes />
      <Psychologist />
      <Footer />
    </div>
  );
};

export default App;
