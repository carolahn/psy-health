import axios from "axios";

import { LOGIN_SUCCESSFUL, LOGIN_UNSUCCESSFUL, LOGOUT, SCHEDULE_APPOINTMENT } from "./action-types";

const base_login_url = `https://psy-health-api.herokuapp.com/login`;
const base_users_url = `https://psy-health-api.herokuapp.com/users`;

const login_successeful = (token, user) => ({
  type: LOGIN_SUCCESSFUL,
  token,
  user,
});

const login_unsuccesseful = (error) => ({
  type: LOGIN_UNSUCCESSFUL,
  error,
});

export const login = (email, password, history) => async (dispatch) => {
  await axios({
    headers: { "Content-Type": "application/json" },
    method: "post",
    url: base_login_url,
    data: {
      email,
      password,
    },
  })
    .then(async ({ data: { accessToken } }) => {
      await axios
        .get(base_users_url)
        .then(({ data }) => {
          dispatch(
            login_successeful(
              accessToken,
              Object.values(data).find((e) => e.email === email)
            )
          );
          history.push("/");
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
