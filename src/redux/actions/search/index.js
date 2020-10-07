import axios from "axios";

export const GET_PSY = "GET_PSY";
export const FILTERED_PSY = "FILTERED_PSY";

export const filterPsyList = (filtered) => ({
  type: FILTERED_PSY,
  filtered,
});

const addToPsyList = (psyList) => ({
  type: GET_PSY,
  psyList,
});

export const requestPsy = () => async (dispatch) => {
  const request = await axios.get("http://psy-health-api.herokuapp.com/users");

  const psy = request.data.filter((user) => user.is_psic);

  dispatch(addToPsyList(psy));
};
