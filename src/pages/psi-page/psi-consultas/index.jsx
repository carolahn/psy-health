import { Row, Col } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "antd/dist/antd.css";

import CardListPsiAppointments from "../../../components/card-list-psi-appointments";
import { getAppointments } from "../../../redux/actions/appointments";
import { getOneUser } from "../../../redux/actions/users";
import { MainContainer, MainWrapper } from "./styled";

const PsiAppointments = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const allAppointments = useSelector((state) => state.appointments.allAppointments);
  // const myAppointments = {};
  const nextAppointments = {};
  const pastAppointments = {};

  let today = new Date();
  today = moment(today).format("YYYY-MM-DD HH:mm:ss");
  console.log(today);
  // today = new Date(today);
  // console.log(today);

  useEffect(() => {
    if (!allAppointments) {
      dispatch(getAppointments());
      dispatch(getOneUser(login.user.id));
    } else if (JSON.stringify(allAppointments) === "{}") {
      dispatch(getAppointments());
      dispatch(getOneUser(login.user.id));
    }
  }, []);

  if (allAppointments) {
    Object.values(allAppointments).map((item) => {
      if (item.psic.id === login.user.id) {
        // myAppointments[item.date.start] = { ...item };
        if (item.date.start > today) {
          nextAppointments[item.date.start] = { ...item };
        }
        if (item.date.start <= today) {
          pastAppointments[item.date.start] = { ...item };
        }
      }
    });
    // console.log("nextAppointments", nextAppointments);
    // console.log("pastAppointments", pastAppointments);
  }
  return (
    <MainContainer className="psi-appointments-page">
      <MainWrapper>
        <Row>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <div className="next-appointments">
              <div className="appointments-title">Próximas consultas</div>
              {nextAppointments && (
                <CardListPsiAppointments
                  type="next"
                  appointments={nextAppointments}
                  numberOfCards={3}
                  style={{ marginRight: "15px" }}
                />
              )}
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <div className="past-appointments">
              <div className="appointments-title">Histórico de consultas</div>
              {pastAppointments && (
                <CardListPsiAppointments
                  type="next"
                  appointments={pastAppointments}
                  numberOfCards={3}
                  style={{ marginLeft: "15px" }}
                />
              )}
            </div>
          </Col>
        </Row>
      </MainWrapper>
    </MainContainer>
  );
};

export default PsiAppointments;
