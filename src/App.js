import React from "react";
import "./App.css";

import Footer from "./components/footer";
import Header from "./components/header";
import Routes from "./routes";

const App = () => {
  return (
    <div>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
