import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
// import moment from "moment";

const slice = createSlice({
  name: "users",
  initialState: {
    info: {},
    loading: false,
  },
  reducers: {
    usersRequested: (users, action) => {
      users.loading = true;
    },
    usersRequestFailed: (users, action) => {
      users.loading = false;
    },
    userUpdated: (users, action) => {
      users.info = action.payload;
    },
  },
});
const { usersRequested, usersRequestFailed, userUpdated } = slice.actions;
export default slice.reducer;

const url = "/user/";

export const updateUser = (userId, user) =>
  apiCallBegan({
    url: url + userId,
    method: "put",
    data: user,
    onStart: usersRequested.type,
    onSuccess: userUpdated.type,
    onError: usersRequestFailed,
  });
