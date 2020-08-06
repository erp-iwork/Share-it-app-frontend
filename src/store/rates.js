import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
// import moment from "moment";

const slice = createSlice({
  name: "rates",
  initialState: {
    list: [],
    loading: false,
    rate: {},
    status: "initial",
  },
  reducers: {
    ratesRequested: (rates, action) => {
      rates.loading = true;
    },
    ratesReceived: (rates, action) => {
      rates.list = action.payload;
      rates.loading = false;
    },
    ratesRequestFailed: (rates, action) => {
      rates.loading = false;
      rates.status = "failed";
    },
    ratesAdded: (rates, action) => {
      rates.list.push(action.payload);
      rates.loading = false;
      rates.status = "success";
    },
  },
});
const {
  ratesRequested,
  ratesReceived,
  ratesRequestFailed,
  ratesAdded,
} = slice.actions;
export default slice.reducer;

const url = "/user/rating/";
export const loadRates = (userId) =>
  apiCallBegan({
    url: `${url}?user_id=${userId}`,
    onStart: ratesRequested.type,
    onSuccess: ratesReceived.type,
    onError: ratesRequestFailed.type,
  });

export const rate = (data) =>
  apiCallBegan({
    url,
    method: "post",
    data: data,
    onStart: ratesRequested.type,
    onSuccess: ratesAdded.type,
    onError: ratesRequestFailed.type,
  });
export const getRates = createSelector(
  (state) => state.entities.rates,
  (rates) => rates.list
);

export const getLoading = createSelector(
  (state) => state.entities.rates,
  (rates) => rates.loading
);

export const getStatus = createSelector(
  (state) => state.entities.rates,
  (rates) => rates.status
);
