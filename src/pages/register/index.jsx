import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import Logo from "../../assets/imgs/logo2.svg";
import RegisterSvg from "../../assets/imgs/undraw_secure_login_pdn4.svg";
import SvgContainer from "../../components/svg-container";
import RegisterForm from "./register-form";
import { RegisterContainer, SideContainer } from "./styled";

const RegisterUser = () => {
  const history = useHistory();
  const where = useLocation().pathname;

  return (
    <RegisterContainer>
      {where.includes("psi") && <SvgContainer svgExtra={RegisterSvg} esquerda />}
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
              className={where === "/register/psi" && "psi"}
              onClick={() => history.push("/register/psi")}>
              Sou Psicólogo
            </span>
          </div>

          <div className="form-holder">
            <RegisterForm isPsic={where.includes("psi")} />
            <span className="changePage">
              Já possui cadastrado?{" "}
              <span
                onClick={() =>
                  where.includes("psi") ? history.push("/login/psi") : history.push("/login")
                }>
                Faça o login!
              </span>
            </span>
          </div>
        </div>

        <div className="mobile footer">footer</div>
      </SideContainer>
      {!where.includes("psi") && <SvgContainer svgExtra={RegisterSvg} />}
    </RegisterContainer>
  );
};

export default RegisterUser;
