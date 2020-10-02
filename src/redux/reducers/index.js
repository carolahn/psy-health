import { combineReducers } from "redux";

import appointments from "./appointments";
import users from "./users";

// import reducer from "path to reducer";

export default combineReducers({
  users,
  appointments,
});
