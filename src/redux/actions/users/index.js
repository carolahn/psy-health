import axios from "axios";

export const GET_USERS = "GET_USERS";
export const GET_ONE_USER = "GET_ONE_USER";
export const PATCH_USER_INFO = "PATCH_USER_INFO";

export const getUsers = () => (dispatch) => {
  axios
    .get("https://psy-health-api.herokuapp.com/users")
    .then(({ data }) => {
      const normalized = {};
      data.map((item) => (normalized[item.id] = { ...item }));
      return normalized;
    })
    .then((normalized) => dispatch(getUsersAction(normalized)));
};

const getUsersAction = (allUsers) => ({
  type: GET_USERS,
  payload: {
    allUsers,
  },
});

export const getOneUser = (userId) => (dispatch) => {
  axios
    .get(`https://psy-health-api.herokuapp.com/users/${userId}`)
    .then(({ data }) => dispatch(getOneUserAction(data)));
};

const getOneUserAction = (oneUser) => ({
  type: GET_ONE_USER,
  payload: {
    oneUser,
  },
});

export const patchUserInfo = (userId, token, newData) => (dispatch) => {
  axios({
    method: "patch",
    url: `https://psy-health-api.herokuapp.com/users/${userId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      userId,
      ...newData,
    },
  })
    .then(() => dispatch(patchUserInfoAction()))
    .then(() => dispatch(getOneUser(userId)));
};

const patchUserInfoAction = () => ({
  type: PATCH_USER_INFO,
});
