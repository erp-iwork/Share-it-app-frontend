import { combineReducers } from "redux";
import itemsReducer from "./items";
import categoriesReducer from "./categories";

export default combineReducers({
  items: itemsReducer,
  categories: categoriesReducer,
});
