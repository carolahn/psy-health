import { LOGIN, LOGOUT } from "../../actions/login/action-types";

const defaultState = {
  id: "",
  username: "",
  email: "",
  access: "",
  token: "",
};

const reducer = (
  state = (localStorage.getItem("psi-health-logged-data") &&
    JSON.parse(localStorage.getItem("psi-health-logged-data"))) ||
    defaultState,
  action
) => {
  switch (action.type) {
    case LOGIN:
      state = {
        ...state,
        id: action.id,
        username: action.username,
        email: action.email,
        access: action.access,
        token: action.token,
      };
      localStorage.setItem("psi-health-logged-data", JSON.stringify(state));
      return state;
    case LOGOUT:
      state = {
        ...state,
        id: "",
        username: "",
        email: "",
        access: "",
        token: "",
      };
      localStorage.removeItem("psi-health-logged-data");
      return state;
    default:
      return state;
  }
};

export default reducer;
