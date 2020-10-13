import { GET_USERS, GET_ONE_USER, PATCH_USER_INFO } from "../../actions/users";

const defaultState = [];

const users = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      const { allUsers } = payload;
      return { ...state, allUsers: { ...allUsers } };
    case GET_ONE_USER:
      const { oneUser } = payload;
      return { ...state, oneUser: { ...oneUser } };
    case PATCH_USER_INFO:
      return state;
    default:
      return state;
  }
};

export default users;
