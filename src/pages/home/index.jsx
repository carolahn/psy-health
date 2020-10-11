import React from "react";

import BannerOperation from "../../components/banner-operation";
import BannerSearch from "../../components/banner-search";
import { MainContainer } from "./styled";

const Home = () => {
  return (
    <MainContainer className="home-page">
      <BannerSearch />
      <BannerOperation />
    </MainContainer>
  );
};
export default Home;
