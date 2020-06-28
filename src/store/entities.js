import { combineReducers } from "redux";
import itemsReducer from "./items";
import categoriesReducer from "./categories";
import profileReducer from "./users";

export default combineReducers({
  items: itemsReducer,
  categories: categoriesReducer,
  users: profileReducer,
});
