import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Calendar from "../../components/calendar";
import { getAppointments } from "../../redux/actions/appointments";
import { getUsers } from "../../redux/actions/users";

const PsychologistPage = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users.allUsers);
  const allAppointments = useSelector((state) => state.appointments.allAppointments);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getAppointments());
  }, []);

  return (
    <>
      {allUsers
        ? allAppointments && (
            <Calendar
              type="psic-info"
              psicInfo={allUsers["13"]}
              patInfo={allUsers["12"]}
              allAppointments={allAppointments}
            />
          )
        : ""}
    </>
  );
};

export default PsychologistPage;
