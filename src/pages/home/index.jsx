import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import BannerOperation from "../../components/banner-operation";
import BannerSearch from "../../components/banner-search";
import DepoimentsBanner from "../../containers/depoiments-banner";
import { getDepoiments } from "../../redux/actions/depoiments";
import { MainContainer } from "./styled";

const Home = () => {
  const dispatch = useDispatch();
  const [listComments, setListComments] = useState([]);

  useEffect(() => {
    dispatch(getDepoiments());
    // axios.get("https://psy-health-api.herokuapp.com/depoiments").then(({ data }) => {
    //   setListComments([...data]);
    // });
  }, []);

  console.log(listComments);

  return (
    <MainContainer className="home-page">
      <BannerSearch />
      <BannerOperation />
      {/* {listComments && <DepoimentsBanner listComments={listComments} />} */}
    </MainContainer>
  );
};
export default Home;
