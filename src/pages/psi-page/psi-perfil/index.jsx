import { Row, Col, Rate, Form, Input, Button, Select } from "antd";
import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Calendar from "../../../components/calendar";
import { useWindowSize } from "../../../hooks/index";
import { getAppointments } from "../../../redux/actions/appointments";
import { getOneUser, patchUserInfo } from "../../../redux/actions/users";
import PsiForm from "./psi-form"; //////////////////////////////
import {
  MainWrapper,
  PsiCard,
  StyledWorkForm,
  StyledRate,
  StyledPsicName,
  StyledPsicNameCenter,
  MainContainer,
} from "./styled";

const PsiProfile = () => {
  // const style = { background: "#0092ff", padding: "8px 0" };
  const { id } = useParams();
  const dispatch = useDispatch();
  const [width] = useWindowSize();

  const oneUser = useSelector((state) => state.users.oneUser);
  const login = useSelector((state) => state.login);
  const allAppointments = useSelector((state) => state.appointments.allAppointments);

  useEffect(() => {
    dispatch(getOneUser(login.user.id));
    dispatch(getAppointments());
    // history.push("/psi/consultas");
  }, []);

  return (
    <MainContainer>
      <MainWrapper>
        <PsiForm oneUser={oneUser} login={login} allAppointments={allAppointments} isEditable />

        <Row className="row-calendar">
          <Col className="col-calendar" xs={24} sm={24} md={24} lg={24} xl={24}>
            <div className="title-agenda">
              <p className="title-p-agenda">Agenda</p>
            </div>

            {oneUser
              ? allAppointments && (
                  <Calendar
                    type="user-psic"
                    psicInfo={oneUser}
                    // patInfo={}
                    allAppointments={allAppointments}
                  />
                )
              : ""}
          </Col>
        </Row>
      </MainWrapper>
    </MainContainer>
  );
};

export default PsiProfile;
