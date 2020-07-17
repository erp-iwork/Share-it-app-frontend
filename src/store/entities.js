import { combineReducers } from "redux";
import itemsReducer from "./items";
import categoriesReducer from "./categories";
import subcategoriesReducer from "./subcategories";
import messagesReducer from "./messages";
import sharedItemsReducer from "./sharedItems";
import profileReducer from "./profile";

export default combineReducers({
  items: itemsReducer,
  categories: categoriesReducer,
  subcategories: subcategoriesReducer,
  messages: messagesReducer,
  sharedItems: sharedItemsReducer,
  profile: profileReducer,
});
