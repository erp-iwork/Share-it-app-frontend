import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
const slice = createSlice({
  name: "categories",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    categoriesRequested: (categories, action) => {
      categories.loading = true;
    },
    categoriesReceived: (categories, action) => {
      categories.list = action.payload;
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

//Selector
export const getCategories = createSelector(
  (state) => state.entities.categories,
  (categories) => categories.list
);
