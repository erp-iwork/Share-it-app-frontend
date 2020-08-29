import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
// import moment from "moment";

const slice = createSlice({
  name: "sharedItems",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    sharedItemRequested: (sharedItem, action) => {
      sharedItem.loading = true;
    },
    sharedItemReceived: (sharedItem, action) => {
      sharedItem.list = action.payload;
      sharedItem.loading = false;
    },
    sharedItemRequestFailed: (sharedItem, action) => {
      sharedItem.loading = false;
    },
  },
});

const {
  sharedItemRequested,
  sharedItemReceived,
  sharedItemRequestFailed,
} = slice.actions;
export default slice.reducer;

const url = "/shared_items?owner=";
export const loadSharedItems = (ownerId) =>
  apiCallBegan({
    url: url + ownerId,
    onStart: sharedItemRequested.type,
    onSuccess: sharedItemReceived.type,
    onError: sharedItemRequestFailed.type,
  });

export const getSharedItems = createSelector(
  (state) => state.entities.sharedItems,
  (sharedItems) => sharedItems.list
);
