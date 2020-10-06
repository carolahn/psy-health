import { Row, Col } from "antd";
import "antd/dist/antd.css";
import React from "react";

import { MainWrapper } from "./styled";

const PsychologistProfile = () => {
  const style = { background: "#0092ff", padding: "8px 0" };
  return (
    <MainWrapper>
      <Row>
        <Col className="col-left col" xs={24} sm={24} md={8} lg={8} xl={5}>
          col1
        </Col>
        <Col className="col-center col" xs={24} sm={24} md={16} lg={16} xl={10}>
          col2
        </Col>
        <Col className="col-space col" xs={0} sm={0} md={8} lg={8} xl={0}>
          col-extra
        </Col>
        <Col className="col-right col" xs={24} sm={24} md={16} lg={16} xl={9}>
          col3
        </Col>
      </Row>
    </MainWrapper>
  );
};

export default PsychologistProfile;
