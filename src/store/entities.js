import { combineReducers } from "redux";
import itemsReducer from "./items";
import categoriesReducer from "./categories";
import profileReducer from "./users";
import subcategoriesReducer from "./subcategories";
import messagesReducer from "./chat"

export default combineReducers({
  items: itemsReducer,
  categories: categoriesReducer,
  subcategories: subcategoriesReducer,
  users: profileReducer,
  chat: messagesReducer,
});
