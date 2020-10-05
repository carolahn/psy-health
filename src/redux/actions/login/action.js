import axios from "axios";

import { LOGIN_SUCCESSFUL, LOGIN_UNSUCCESSFUL, LOGOUT, SCHEDULE_APPOINTMENT } from "./action-types";

const base_login_url = `https://psy-health-api.herokuapp.com/login`;
const base_users_url = `https://psy-health-api.herokuapp.com/users`;

const login_successeful = (token, psi) => ({
  type: LOGIN_SUCCESSFUL,
  token,
  psi,
});

const login_unsuccesseful = () => {};

export const login = (email, password) => async (dispatch) => {
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
      //   console.log(accessToken);
      await axios
        .get(base_users_url)
        .then(({ data }) => {
          console.log(Object.values(data).find((e) => e.email === email));
          dispatch(
            login_successeful(
              accessToken,
              Object.values(data).find((e) => e.email === email)
            )
          );
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
};
