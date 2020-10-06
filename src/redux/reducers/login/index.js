import {
  LOGIN_SUCCESSFUL,
  LOGIN_UNSUCCESSFUL,
  LOGOUT,
  SCHEDULE_APPOINTMENT,
} from "../../actions/login/action-types";

const defaultState = {
  user: "",
  token: "",
  hadError: false,
  chosenPsi: "",
  psiAppointmentBeginning: "",
  psiAppointmentEnding: "",
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
        user: action.user,
        token: action.token,
        hadError: false,
      };
      localStorage.setItem("psi-health-logged-data", JSON.stringify(state));
      return state;
    case LOGIN_UNSUCCESSFUL:
      state = {
        ...state,
        user: "",
        token: "",
        hadError: action.error,
        chosenPsi: "",
        psiAppointmentBeginning: "",
        psiAppointmentEnding: "",
      };
      localStorage.setItem("psi-health-logged-data", JSON.stringify(state));
      return state;
    case LOGOUT:
      state = {
        ...state,
        user: "",
        token: "",
        hadError: false,
      };
      localStorage.removeItem("psi-health-logged-data");
      return state;
    case SCHEDULE_APPOINTMENT:
      state = {
        ...state,
        chosenPsi: action.chosenPsi,
        psiAppointmentBeginning: action.psiAppointmentBeginning,
        psiAppointmentEnding: action.psiAppointmentEnding,
      };
      localStorage.setItem("psi-health-logged-data", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default reducer;
