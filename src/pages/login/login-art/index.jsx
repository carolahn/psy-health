import React from "react";
import { useLocation } from "react-router-dom";

import { usr_urls, psi_urls } from "../";
import { ArtContainer } from "./styled";

const Decor = () => {
  const where = useLocation().pathname;

  return (
    <>
      {usr_urls.some((e) => e === where) ? (
        <ArtContainer>
          <div className="semi-bcgrnd-holder-right">
            <div className="pic-holder-right" />
          </div>
        </ArtContainer>
      ) : psi_urls.some((e) => e === where) ? (
        <ArtContainer>
          <div className="semi-bcgrnd-holder-left">
            <div className="pic-holder-left" />
          </div>
        </ArtContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default Decor;
