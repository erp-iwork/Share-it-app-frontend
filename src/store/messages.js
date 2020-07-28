import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
// import moment from "moment";

const slice = createSlice({
  name: "messages",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    messagesRequested: (messages, action) => {
      messages.loading = true;
    },
    messagesReceived: (messages, action) => {
      messages.list = action.payload;
      messages.loading = false;
    },
    messagesRequestFailed: (messages, action) => {
      messages.loading = false;
    },
  },
});
const {
  messagesRequested,
  messagesReceived,
  messagesRequestFailed,
} = slice.actions;
export default slice.reducer;

const url = "/test/";
export const loadMessages = () =>
  apiCallBegan({
    url,
    onStart: messagesRequested.type,
    onSuccess: messagesReceived.type,
    onError: messagesRequestFailed.type,
  });

//Selector
export const getMessages = createSelector(
  (state) => state.entities.messages,
  (messages) => messages.list
);
