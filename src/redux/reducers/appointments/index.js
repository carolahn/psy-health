import {
  GET_APPOINTMENTS,
  GET_ONE_APPOINTMENT,
  POST_APPOINTMENTS,
  PATCH_APPOINTMENT_INFO,
  DELETE_APPOINTMENT,
} from "../../actions/appointments";

const defaultState = [];

const appointments = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_APPOINTMENTS:
      const { allAppointments } = payload;
      return { ...state, allAppointments: { ...allAppointments } };
    case GET_ONE_APPOINTMENT:
      const { oneAppointment } = payload;
      return { ...state, oneAppointment: { ...oneAppointment } };
    case POST_APPOINTMENTS:
      return state;
    case PATCH_APPOINTMENT_INFO:
      return state;
    case DELETE_APPOINTMENT:
      return state;
    default:
      return state;
  }
};

export default appointments;
