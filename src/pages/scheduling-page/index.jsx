import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Calendar from "../../containers/calendar";
import { getAppointments } from "../../redux/actions/appointments";
import { getOneUser } from "../../redux/actions/users";
import PsiForm from "../psi-page/psi-perfil/psi-form";
import { MainContainer, MainWrapper } from "./styled";
import "antd/dist/antd.css";

const SchedulingPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [psicInfo, setPsicInfo] = useState({});
  const oneUser = useSelector((state) => state.users.oneUser);
  const login = useSelector((state) => state.login);
  const allAppointments = useSelector((state) => state.appointments.allAppointments);

  useEffect(() => {
    dispatch(getAppointments());
    dispatch(getOneUser(id));
  }, []);

  useEffect(() => {
    setPsicInfo({ ...oneUser });
  }, [oneUser]);

  return (
    <MainContainer className="scheduling-page">
      <MainWrapper>
        <div>
          {JSON.stringify(psicInfo) != "{}"
            ? psicInfo.id == id
              ? allAppointments && (
                  <PsiForm
                    oneUser={psicInfo}
                    login={login}
                    allAppointments={allAppointments}
                    isEditable={false}
                  />
                )
              : ""
            : ""}
        </div>
        <div>
          {oneUser
            ? allAppointments && (
                <>
                  <div className="title-agenda">
                    <p className="title-p-agenda">Agenda</p>
                  </div>
                  <Calendar
                    type="psic-info"
                    psicInfo={oneUser}
                    // patInfo={}
                    allAppointments={allAppointments}
                    login={login}
                    // isEditable={false}
                  />
                </>
              )
            : ""}
        </div>
      </MainWrapper>
    </MainContainer>
  );
};

export default SchedulingPage;
