import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
// import moment from "moment";

const slice = createSlice({
  name: "categories",
  initialState: {
    list: [],
    loading: false,
    subcategoriesList: [],
  },
  reducers: {
    categoriesRequested: (categories, action) => {
      categories.loading = true;
    },
    categoriesReceived: (categories, action) => {
      categories.list = action.payload;
      categories.loading = false;
    },
    subcategoriesReceived: (subcategories, action) => {
      subcategories.subcategoriesList = action.payload;
      subcategories.loading = false;
    },
    categoriesRequestFailed: (categories, action) => {
      categories.loading = false;
    },
  },
});
const {
  categoriesRequested,
  categoriesReceived,
  categoriesRequestFailed,
  subcategoriesReceived,
} = slice.actions;
export default slice.reducer;
const url = "/category/";
export const loadCategories = () =>
  apiCallBegan({
    url,
    onStart: categoriesRequested.type,
    onSuccess: categoriesReceived.type,
    onError: categoriesRequestFailed.type,
  });
export const loadSubcategories = () =>
  apiCallBegan({
    url: "/sub_category/",
    onStart: categoriesRequested.type,
    onSuccess: subcategoriesReceived.type,
    onError: categoriesRequestFailed.type,
  });

//Selector
export const getCategories = createSelector(
  (state) => state.entities.categories,
  (categories) => categories.list
);

export const getSubcategories = createSelector(
  (state) => state.entities.categories,
  (categories) => categories.subcategoriesList
);
