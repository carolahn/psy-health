import axios from "axios";

export const GET_APPOINTMENTS = "GET_APPOINTMENTS";
export const GET_ONE_APPOINTMENT = "GET_ONE_APPOINTMENT";
export const POST_APPOINTMENTS = "POST_APPOINTMENTS";
export const PATCH_APPOINTMENT_INFO = "PATCH_APPOINTMENT_INFO";
export const DELETE_APPOINTMENT = "DELETE_APPOINTMENT";

export const getAppointments = () => (dispatch) => {
  axios
    .get("https://psy-health-api.herokuapp.com/appointments")
    .then(({ data }) => {
      const normalized = {};
      data.map((item) => {
        normalized[item.id] = { ...item };
      });
      return normalized;
    })
    .then((normalized) => dispatch(getAppointmentsAction(normalized)));
};

const getAppointmentsAction = (allAppointments) => ({
  type: GET_APPOINTMENTS,
  payload: {
    allAppointments,
  },
});

export const getOneAppointment = (appointmentId) => (dispatch) => {
  axios
    .get(`https://psy-health-api.herokuapp.com/appointments/${appointmentId}`)
    .then(({ data }) => dispatch(getOneAppointmentAction(data)));
};

const getOneAppointmentAction = (oneAppointment) => ({
  type: GET_ONE_APPOINTMENT,
  payload: {
    oneAppointment,
  },
});

export const postAppointments = (userId, token, newData) => (dispatch) => {
  axios({
    method: "post",
    url: `https://psy-health-api.herokuapp.com/appointments`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      userId,
      ...newData,
    },
  })
    .then(() => dispatch(postAppointmentsAction()))
    .then(() => dispatch(getAppointments()));
};

const postAppointmentsAction = () => ({
  type: POST_APPOINTMENTS,
});

export const patchAppointmentInfo = (userId, appointmentId, token, newData) => (dispatch) => {
  axios({
    method: "patch",
    url: `https://psy-health-api.herokuapp.com/appointments/${appointmentId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      userId,
      ...newData,
    },
  })
    .then(() => dispatch(patchAppointmentInfoAction()))
    .then(() => dispatch(getAppointments()));
};

const patchAppointmentInfoAction = () => ({
  type: PATCH_APPOINTMENT_INFO,
});

export const deleteAppointment = (appointmentId, token) => (dispatch) => {
  axios({
    method: "delete",
    url: `https://psy-health-api.herokuapp.com/appointments/${appointmentId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(() => dispatch(deleteAppointmentAction()));
};

const deleteAppointmentAction = () => ({
  type: DELETE_APPOINTMENT,
});
