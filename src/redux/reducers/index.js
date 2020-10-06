import { combineReducers } from "redux";

import appointments from "./appointments";
import login from "./login";
import users from "./users";

export default combineReducers({
  login,
  users,
  appointments,
});
