import {
  LOGIN_SUCCESSFUL,
  LOGIN_UNSUCCESSFUL,
  LOGOUT,
  SCHEDULE_APPOINTMENT,
} from "../../actions/login/action-types";

const defaultState = {
  id: "",
  psi: "",
  username: "",
  email: "",
  isPsic: "",
  token: "",
  hadError: false,
  chosenPsi: "",
  psiScheduleBeginning: "",
  psiScheduleEnding: "",
};

const reducer = (
  state = (localStorage.getItem("psi-health-logged-data") &&
    JSON.parse(localStorage.getItem("psi-health-logged-data"))) ||
    defaultState,
  action
) => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      state = {
        ...state,
        /* id: action.id, */
        psi: action.psi,
        /* username: action.username,
        email: action.email,
        isPsic: action.isPsic, */
        token: action.token,
        hadError: false,
      };
      localStorage.setItem("psi-health-logged-data", JSON.stringify(state));
      return state;
    case LOGIN_UNSUCCESSFUL:
      state = {
        ...state,
        id: "",
        psi: "",
        username: "",
        email: "",
        isPsic: "",
        token: "",
        hadError: action.error,
        chosenPsi: "",
        psiScheduleBeginning: "",
        psiScheduleEnding: "",
      };
      localStorage.setItem("psi-health-logged-data", JSON.stringify(state));
      return state;
    case LOGOUT:
      state = {
        ...state,
        id: "",
        psi: "",
        username: "",
        email: "",
        isPsic: "",
        token: "",
        hadError: false,
      };
      localStorage.removeItem("psi-health-logged-data");
      return state;
    case SCHEDULE_APPOINTMENT:
      state = {
        ...state,
        chosenPsi: action.chosenPsi,
        psiScheduleBeginning: action.psiScheduleBeginning,
        psiScheduleEnding: action.psiScheduleEnding,
      };
      localStorage.setItem("psi-health-logged-data", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default reducer;
