import {
  LOGIN_SUCCESSFUL,
  LOGIN_UNSUCCESSFUL,
  LOGOUT,
  SCHEDULE_APPOINTMENT,
  UPDATE_APPOINTMENTS,
} from "../../actions/login/action-types";

const defaultState = {
  user: {},
  token: "",
  hadError: false,
  userAppointments: {},
  psiList: [],
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
        user: { ...action.user },
        token: action.token,
        userAppointments: { ...action.userAppointments },
        psiList: [...action.psiList],
        hadError: false,
      };
      localStorage.setItem("psi-health-logged-data", JSON.stringify(state));
      return state;
    case LOGIN_UNSUCCESSFUL:
      state = {
        ...state,
        user: {},
        token: "",
        hadError: action.error,
        userAppointments: {},
        psiList: [],
        chosenPsi: "",
        psiAppointmentBeginning: "",
        psiAppointmentEnding: "",
      };
      localStorage.setItem("psi-health-logged-data", JSON.stringify(state));
      return state;
    case LOGOUT:
      state = {
        ...state,
        user: {},
        token: "",
        hadError: false,
        userAppointments: {},
        psiList: [],
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
    case UPDATE_APPOINTMENTS:
      state = {
        ...state,
        userAppointments: { ...action.userAppointments },
      };
      localStorage.setItem("psi-health-logged-data", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default reducer;
