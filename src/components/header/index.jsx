/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Header = () => {
  const token = true;
  const { width } = useWindowSize();

  return <StyledHeader>{token ? <></> : <></>}</StyledHeader>;
};

export default Header;

const StyledHeader = styled.div`
  background-color: #70a3ef;
  width: 100%;
  height: 70px;
`;

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
