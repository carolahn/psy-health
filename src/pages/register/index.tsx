import React from "react";

import Logo from "../../assets/imgs/logo-azul.svg";
import RegisterSvg from "../../assets/imgs/undraw_secure_login_pdn4.svg";
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
        <div className="small-header">
          <img src={Logo} alt="Logo" onClick={() => history.push("/")} />
        </div>

        <div className="lower-form">
          <h1>Cadastro</h1>
          <div className="changeToPsic">
            <span
              className={where === "/cadastro" ? "usr" : undefined}
              onClick={() => history.push("/cadastro")}>
              Sou Paciente
            </span>
            <span
              className={where === "/cadastro/psi" ? "psi" : undefined}
              onClick={() => history.push("/cadastro/psi")}>
              Sou Psicólogo
            </span>
          </div>

          <div className="form-holder">
            <RegisterFormContainer is_psic={where.includes("psi")} />
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
      </SideContainer>
      {!where.includes("psi") && <SvgContainer svgExtra={RegisterSvg} />}
    </RegisterContainer>
  );
};

export default Register;
