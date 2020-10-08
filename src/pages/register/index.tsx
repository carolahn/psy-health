import React from "react";

import Logo from "../../assets/imgs/logo2.svg";
import RegisterSvg from "../../assets/imgs/undraw_secure_login_pdn4.svg";
import Footer from "../../components/footer";
import Header from "../../components/header";
import SvgContainer from "../../components/svg-container";
import RegisterFormContainer from "../../containers/register-form";
import { RegisterContainer, SideContainer } from "./styled";

interface RegisterProps {
  where: string;
  history: any;
}

const Register = ({ where, history }: RegisterProps) => {
  return (
    <RegisterContainer>
      {where.includes("psi") && <SvgContainer svgExtra={RegisterSvg} esquerda />}
      <SideContainer>
        <div>
          <div className="small-header">
            <img src={Logo} alt="Logo" onClick={() => history.push("/")} />
          </div>
          <div className="mobile header">
            <Header />
          </div>
        </div>

        <div className="lower-form">
          <h1>Register</h1>
          <div className="changeToPsic">
            <span
              className={where === "/register" ? "usr" : undefined}
              onClick={() => history.push("/register")}>
              Sou Paciente
            </span>
            <span
              className={where === "/register/psi" ? "psi" : undefined}
              onClick={() => history.push("/register/psi")}>
              Sou Psicólogo
            </span>
          </div>

          <div className="form-holder">
            <RegisterFormContainer isPsic={where.includes("psi")} />
            <span className="changePage">
              Já possui cadastrado?
              <span
                onClick={() =>
                  where.includes("psi") ? history.push("/login/psi") : history.push("/login")
                }>
                Faça o login!
              </span>
            </span>
          </div>
        </div>

        <div className="mobile footer">
          <Footer />
        </div>
      </SideContainer>
      {!where.includes("psi") && <SvgContainer svgExtra={RegisterSvg} />}
    </RegisterContainer>
  );
};

export default Register;
