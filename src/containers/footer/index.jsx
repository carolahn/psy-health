import React from "react";
import { useLocation } from "react-router-dom";
import Footer from '../../components/footer';

const FooterContainer = () => {
  const where = useLocation().pathname;
  const non_header_urls = [
    "/login",
    "/login/",
    "/login/psi",
    "/login/psi/",
    "/cadastro",
    "/cadastro/",
    "/cadastro/psi",
    "/cadastro/psi/",
  ];

  if (non_header_urls.some((e) => e === where)) {
    return <></>
  } else { 
    return <Footer />
  }
}

export default FooterContainer;