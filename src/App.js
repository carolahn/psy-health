import React from "react";

import "./App.css";
import BannerOperation from "./components/banner-operation";
import BannerSearch from "./components/banner-search";
import Footer from "./components/footer";
import Header from "./components/header";
import Routes from "./routes";

const App = () => {
  return (
    <div>
      <BannerSearch />
      <BannerOperation />
    </div>
  );
};

export default App;
