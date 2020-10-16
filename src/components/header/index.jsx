/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { useWindowSize } from "../../hooks";
import { login_urls } from "../../pages/login";
import { LoggedHeader, NonLoggedHeader, MobileHeader } from "./containers";

const non_header_urls = [
  ...login_urls,
  "/cadastro",
  "/cadastro/",
  "/cadastro/psi",
  "/cadastro/psi/",
];
const header_urls = ["", "/", "/buscar", "/buscar/", "/psi", "/psi/"];

const start_with_urls = [
  "/consultas",
  "/consultas/",
  "/psi/consultas",
  "/psi/consultas/",
  "/psi/agendamentos",
  "/psi/agendamentos/",
  "/psi/perfil",
  "/psi/perfil/",
];

const Header = () => {
  const isLoggedIn = useSelector((state) => state.login.token);
  const [width] = useWindowSize();
  const where = useLocation().pathname;

  const isDesktop = width >= 950;

  if (non_header_urls.some((e) => e === where)) return <></>;

  if (header_urls.some((e) => e === where) || start_with_urls.some((e) => where.startsWith(e))) {
    return isLoggedIn ? (
      isDesktop ? (
        <LoggedHeader />
      ) : (
        <MobileHeader />
      )
    ) : isDesktop ? (
      <NonLoggedHeader />
    ) : (
      <MobileHeader />
    );
  }

  return isDesktop ? <NonLoggedHeader /> : <MobileHeader />;
};

export default Header;
