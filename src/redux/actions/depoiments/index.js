import axios from "axios";

export const GET_DEPOIMENTS = "GET_DEPOIMENTS";
export const POST_DEPOIMENTS = "POST_DEPOIMENTS";

export const getDepoiments = () => (dispatch) => {
  axios
    .get("https://psy-health-api.herokuapp.com/depoiments")
    .then(({ data }) => {
      const normalized = {};
      data.map((item) => {
        normalized[item.id] = { ...item };
      });
      return normalized;
    })
    .then((normalized) => dispatch(requestDepoiments(normalized)));
};

const requestDepoiments = (allDepoiments) => ({
  type: GET_DEPOIMENTS,
  payload: {
    allDepoiments,
  },
});

export const postDepoiments = (userId, token, newData) => (dispatch) => {
  axios({
    method: "post",
    url: `https://psy-health-api.herokuapp.com/depoiments`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      userId,
      ...newData,
    },
  })
    .then(() => dispatch(postRequestDepoiments()))
    .then(() => dispatch(getDepoiments()));
};

const postRequestDepoiments = () => ({
  type: POST_DEPOIMENTS,
});
