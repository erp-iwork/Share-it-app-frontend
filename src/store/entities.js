import { combineReducers } from "redux";
import itemsReducer from "./items";
import categoriesReducer from "./categories";
import subcategoriesReducer from "./subcategories";
import sharedItemsReducer from "./sharedItems";
import profileReducer from "./profile";
import messagesReducer from "./chat";
import userReducer from "./users";

export default combineReducers({
  items: itemsReducer,
  categories: categoriesReducer,
  subcategories: subcategoriesReducer,
  sharedItems: sharedItemsReducer,
  profile: profileReducer,
  chat: messagesReducer,
  users: userReducer,
});
