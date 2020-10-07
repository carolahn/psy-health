import { Row, Col } from "antd";
import moment from "moment";
import React from "react";

import "antd/dist/antd.css";
import { StyledCard } from "./styled";

const CardPsiAppointment = ({ type, appointmentData }) => {
  // type: next, history
  console.log(appointmentData);
  return (
    <StyledCard className="card-psi-appointment">
      <Row>
        <Col xs={10} sm={10} md={10} lg={10} xl={10}>
          CardPsi {appointmentData.patient.name}
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
          {moment(appointmentData.date.start.toLocaleString()).format("DD-MM-YYYY")}
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
          CardPsi
          {moment(appointmentData.date.start.toLocaleString()).format("HH:mm")}
        </Col>
      </Row>
    </StyledCard>
  );
};

export default CardPsiAppointment;
