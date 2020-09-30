import React from "react";
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import logo from '../../assets/img/Grupo_-1.svg';
import { StyledFooterContainer, StyledLogoCotainer, StyledCol, StyledContainerColSocial } from './styled';

const Footer = () => {
  return (
    <StyledFooterContainer>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <StyledLogoCotainer href="#"><img src={logo} alt="Logo" /></StyledLogoCotainer>
        </Col>
        <StyledCol xs={12} sm={7} md={7} lg={7} xl={7}>
          <div className="container-box-left">
            <h4>Sobre a PsyHealth</h4>
            <a href="#">Perguntas frequentes</a>
            <a href="#">Quem somos</a>
            <a href="#">Politica de privacidade</a>
            <a href="#">Paciente: Termos de uso</a>
            <a href="#">Psicólogo: Termos de uso</a>
          </div>

        </StyledCol>
        <StyledCol xs={12} sm={7} md={7} lg={7} xl={7}>
          <div className="container-box-middle">
            <h4>Assuntos mais lidos</h4>
            <a href="#">Ansiedade</a>
            <a href="#">Depressão</a>
            <a href="#">Sindrome do impostor</a>
            <a href="#">Bipolaridade</a>
            <a href="#">Estresse</a>
          </div>
        </StyledCol>
        <StyledCol xs={12} sm={7} md={7} lg={7} xl={7}>
          <div className="container-box-middle">
            <h4>Especialistas</h4>
            <a href="#">Psicanalistas</a>
            <a href="#">Psicólogos</a>
            <a href="#">Terapeutas</a>
            <a href="#">Coachs</a>
          </div>
        </StyledCol>
        <StyledContainerColSocial xs={12} sm={3} md={3} lg={3} xl={3}>
          <div>
            <h4>Redes Sociais</h4>
            <button>Teste</button>
          </div>
        </StyledContainerColSocial>
      </Row>
    </StyledFooterContainer>
  );
};

export default Footer;
