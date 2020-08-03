import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
// import moment from "moment";

const slice = createSlice({
  name: "payment",
  initialState: {
    loading: false,
    status: "initial",
  },
  reducers: {
    paymentRequested: (payment, action) => {
      payment.loading = true;
    },
    paymentReceived: (payment, action) => {
      payment.loading = false;
      payment.status = "success";
    },
    paymentRequestFailed: (payment, action) => {
      payment.loading = false;
      payment.status = "failed";
    },
  },
});

const {
  paymentRequested,
  paymentReceived,
  paymentRequestFailed,
} = slice.actions;
export default slice.reducer;
const url = "/payments/";

export const pay = (data) =>
  apiCallBegan({
    url,
    method: "post",
    data,
    onStart: paymentRequested.type,
    onSuccess: paymentReceived.type,
    onError: paymentRequestFailed.type,
  });

export const getStatus = createSelector(
  (state) => state.entities.payment,
  (payment) => payment.status
);
