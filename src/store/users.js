import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
// import moment from "moment";

const slice = createSlice({
  name: "users",
  initialState: {
    info: {},
    loading: false,
    status: "initial",
    errors: null,
  },
  reducers: {
    usersRequested: (users, action) => {
      users.loading = true;
    },
    usersRequestFailed: (users, action) => {
      users.loading = false;
      users.errors = action.payload;
      users.status = "failed";
    },
    userUpdated: (users, action) => {
      users.info = action.payload;
      users.loading = false;
      users.errors = null;
      users.status = "success";
    },
  },
});
const { usersRequested, usersRequestFailed, userUpdated } = slice.actions;
export default slice.reducer;

const url = "/user/";

export const updateUser = (userId, user) =>
  apiCallBegan({
    url: url + userId + "/",
    method: "put",
    data: user,
    onStart: usersRequested.type,
    onSuccess: userUpdated.type,
    onError: usersRequestFailed,
  });

export const getErrors = createSelector(
  (state) => state.entities.users,
  (users) => users.errors
);

export const getStatus = createSelector(
  (state) => state.entities.users,
  (users) => users.status
);

export const getLoading = createSelector(
  (state) => state.entities.users,
  (users) => users.loading
);
