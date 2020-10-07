import { combineReducers } from "redux";
import search from './search'

import appointments from "./appointments";
import login from "./login";
import users from "./users";

export default combineReducers({
  /* reducer */
  search,
  login,
  users,
  appointments
});
