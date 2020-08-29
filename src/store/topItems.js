import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
import moment from "moment";
import _ from "lodash";

const slice = createSlice({
  name: "topItems",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    topItemsRequested: (topItems, action) => {
      topItems.loading = true;
    },
    topItemsReceived: (topItems, action) => {
      topItems.list = action.payload;
      topItems.loading = false;
    },
    topItemsRequestFailed: (topItems, action) => {
      topItems.loading = false;
    },
  },
});

const {
  topItemsRequested,
  topItemsReceived,
  topItemsRequestFailed,
} = slice.actions;
export default slice.reducer;

const url = "/top-view-items";
export const loadTopItems = () =>
  apiCallBegan({
    url: url,
    onStart: topItemsRequested.type,
    onSuccess: topItemsReceived.type,
    onError: topItemsRequestFailed.type,
  });

export const getTopSharedItems = createSelector(
  (state) => state.entities.topItems,
  (topItems) => topItems.list.filter((item) => item.is_donating === false)
);

export const getTopDonatedItems = createSelector(
  (state) => state.entities.topItems,
  (topItems) => topItems.list.filter((item) => item.is_donating === true)
);
