import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Calendar from "../../components/calendar";
import "antd/dist/antd.css";
import { getAppointments } from "../../redux/actions/appointments";
import { getOneUser } from "../../redux/actions/users";

const PatPageTest = () => {
  const oneUser = useSelector((state) => state.users.oneUser);
  const login = useSelector((state) => state.login);
  const allAppointments = useSelector((state) => state.appointments.allAppointments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAppointments());
    dispatch(getOneUser("13"));
  }, []);
  // console.log(oneUser);
  return (
    <div className="pat-page-test">
      <p>Patient Page Test</p>
      <div>
        {oneUser
          ? allAppointments && (
              <Calendar
                type="psic-info"
                psicInfo={oneUser}
                // patInfo={}
                allAppointments={allAppointments}
                login={login}
              />
            )
          : ""}
      </div>
    </div>
  );
};

export default PatPageTest;
