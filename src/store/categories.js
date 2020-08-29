import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
// import moment from "moment";

const slice = createSlice({
  name: "categories",
  initialState: {
    list: [],
    loading: false,
    selectedCategory: null,
  },
  reducers: {
    categoriesRequested: (categories, action) => {
      categories.loading = true;
    },
    categoriesReceived: (categories, action) => {
      categories.list = action.payload;
      categories.loading = false;
    },
    categoryReceived: (categories, action) => {
      categories.selectedCategory = action.payload;
      categories.loading = false;
    },
    categoriesRequestFailed: (categories, action) => {
      categories.loading = false;
    },
  },
});
const {
  categoriesRequested,
  categoriesReceived,
  categoryReceived,
  categoriesRequestFailed,
} = slice.actions;
export default slice.reducer;
const url = "/categories/";
export const loadCategories = () =>
  apiCallBegan({
    url,
    onStart: categoriesRequested.type,
    onSuccess: categoriesReceived.type,
    onError: categoriesRequestFailed.type,
  });
export const loadCategoryById = (id) =>
  apiCallBegan({
    url: url + id,
    onStart: categoriesRequested.type,
    onSuccess: categoryReceived.type,
    onError: categoriesRequestFailed.type,
  });
//Selector
export const getCategories = createSelector(
  (state) => state.entities.categories,
  (categories) => categories.list
);

export const getSelectedCategory = createSelector(
  (state) => state.entities.categories,
  (categories) => categories.selectedCategory
);
