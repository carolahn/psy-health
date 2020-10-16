import { combineReducers } from "redux";

import appointments from "./appointments";
import depoiments from "./depoiments";
import login from "./login";
import search from "./search";
import users from "./users";

export default combineReducers({
  /* reducer */
  search,
  login,
  users,
  appointments,
  depoiments,
});
