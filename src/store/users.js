import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
// import moment from "moment";

const slice = createSlice({
  name: "users",
  initialState: {
    info: null,
    selectedUserId: "",
    loading: false,
    status: "initial",
    errors: null,
  },
  reducers: {
    usersRequested: (users, action) => {
      users.loading = true;
    },
    usersReceived: (users, action) => {
      users.info = action.payload;
      users.loading = false;
      users.errors = null;
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
    userSelected: (users, action) => {
      users.selectedUserId = action.payload;
    },
  },
});
const {
  usersRequested,
  usersRequestFailed,
  userUpdated,
  usersReceived,
  userSelected,
} = slice.actions;
export default slice.reducer;

const url = "/user/";

export const loadUser = (userId) =>
  apiCallBegan({
    url: url + userId + "/",
    onStart: usersRequested.type,
    onSuccess: usersReceived.type,
    onError: usersRequestFailed.type,
  });

export const updateUser = (userId, user) =>
  apiCallBegan({
    url: url + userId + "/",
    method: "put",
    data: user,
    onStart: usersRequested.type,
    onSuccess: userUpdated.type,
    onError: usersRequestFailed,
  });

export const setSelectedUserId = (userId) => userSelected(userId);

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

export const getUser = createSelector(
  (state) => state.entities.users,
  (users) => users.info
);

export const getSelectedUserId = createSelector(
  (state) => state.entities.users,
  (users) => users.selectedUserId
);
