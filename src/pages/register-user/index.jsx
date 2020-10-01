import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import SvgContainer from "../../components/svg-container";
import Logo from "../../imgs/logo2.svg";
import RegisterSvg from "../../imgs/undraw_secure_login_pdn4 (1).svg";
import RegisterForm from "./register-form";
import { RegisterContainer, SideContainer } from "./styled";

const RegisterUser = (props) => {
  const history = useHistory();
  const where = useLocation().pathname;

  return (
    <RegisterContainer>
      {where.includes("psc") && <SvgContainer svgExtra={RegisterSvg} esquerda />}
      <SideContainer>
        <div>
          <div className="small-header">
            <img src={Logo} alt="Logo" onClick={() => history.push("/")} />
          </div>
          <div className="mobile header">header</div>
        </div>

        <div className="lower-form">
          <h1>Register</h1>
          <div className="changeToPsic">
            <span
              className={where === "/register" && "usr"}
              onClick={() => history.push("/register")}>
              Sou Paciente
            </span>
            <span
              className={where === "/register/psc" && "psc"}
              onClick={() => history.push("/register/psc")}>
              Sou Psicólogo
            </span>
          </div>

          <div className="form-holder">
            <RegisterForm isPsic={where.includes("psc")} />
            <span className="changePage">
              Já possui cadastrado?{" "}
              <span
                onClick={() =>
                  where.includes("psc") ? history.push("/login/psc") : history.push("/login")
                }>
                Faça o login!
              </span>
            </span>
          </div>
        </div>

        <div className="mobile footer">footer</div>
      </SideContainer>
      {!where.includes("psc") && <SvgContainer svgExtra={RegisterSvg} />}
    </RegisterContainer>
  );
};

export default RegisterUser;
