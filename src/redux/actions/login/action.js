import axios from "axios";

import { getAppointments } from "../appointments";
import { LOGIN_SUCCESSFUL, LOGIN_UNSUCCESSFUL, LOGOUT, SCHEDULE_APPOINTMENT } from "./action-types";

const base_login_url = `https://psy-health-api.herokuapp.com/login`;
const base_users_url = `https://psy-health-api.herokuapp.com/users`;
const base_appointments_url = `https://psy-health-api.herokuapp.com/appointments`;

const login_successeful = (token, user, psiList) => ({
  type: LOGIN_SUCCESSFUL,
  token,
  user,
  psiList,
});

const login_unsuccesseful = (error) => ({
  type: LOGIN_UNSUCCESSFUL,
  error,
});

export const login = (email, password, history, hasPsi) => async (dispatch) => {
  await axios({
    headers: { "Content-Type": "application/json" },
    method: "post",
    url: base_login_url,
    data: {
      email,
      password,
    },
  })
    .then(({ data: { accessToken } }) => {
      axios
        .get(base_users_url)
        .then(({ data }) => {
          dispatch(
            login_successeful(
              accessToken,
              Object.values(data).find((e) => e.email === email),
              Object.values(data).filter((e) => e.is_psic)
            )
          );
          dispatch(getAppointments());
          return hasPsi ? history.goBack() : history.push("/");
        })
        .catch((error) => dispatch(login_unsuccesseful(error)));
    })
    .catch((error) => dispatch(login_unsuccesseful(error)));
};

export const logout = () => ({
  type: LOGOUT,
});

export const schedule_appointment = (chosenPsi, psiAppointmentBeginning, psiAppointmentEnding) => ({
  type: SCHEDULE_APPOINTMENT,
  chosenPsi,
  psiAppointmentBeginning,
  psiAppointmentEnding,
});
