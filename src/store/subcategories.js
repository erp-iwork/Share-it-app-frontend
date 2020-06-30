import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
// import moment from "moment";

const slice = createSlice({
  name: "subcategories",
  initialState: {
    list: [],
    filteredSubcategories: [],
    loading: false,
  },
  reducers: {
    subcategoriesRequested: (subcategories, action) => {
      subcategories.loading = true;
    },
    subcategoriesReceived: (subcategories, action) => {
      subcategories.list = action.payload;
      subcategories.loading = false;
    },
    subcategoriesFiltered: (subcategories, action) => {
      subcategories.filteredSubcategories = action.payload;
      subcategories.loading = false;
    },
    subcategoriesRequestFailed: (subcategories, action) => {
      subcategories.loading = false;
    },
  },
});
const {
  subcategoriesRequested,
  subcategoriesReceived,
  subcategoriesRequestFailed,
  subcategoriesFiltered,
} = slice.actions;
export default slice.reducer;

const url = "/sub_categories/";

export const loadSubcategories = () =>
  apiCallBegan({
    url,
    onStart: subcategoriesRequested.type,
    onSuccess: subcategoriesReceived.type,
    onError: subcategoriesRequestFailed.type,
  });

export const loadSubcategoriesByCategoryId = (id) =>
  apiCallBegan({
    url: "/categories?id=" + id,
    onStart: subcategoriesRequested.type,
    onSuccess: subcategoriesFiltered.type,
    onError: subcategoriesRequestFailed.type,
  });

export const getSubcategoriesByCategoryId = createSelector(
  (state) => state.entities.subcategories,
  (subcategories) => subcategories.filteredSubcategories
);
