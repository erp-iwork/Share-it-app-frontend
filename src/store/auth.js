import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
import { setUser, getUser, getToken, setToken } from "../services/authService";

const slice = createSlice({
  name: "auth",
  initialState: {
    currentUser: getUser(),
    authToken: getToken(),
    loading: false,
    status: "initial",
    errors: null,
  },
  reducers: {
    userRequested: (users, action) => {
      users.loading = true;
    },
    userReceived: (users, action) => {
      const { user, token } = action.payload;
      setToken(token);
      setUser(user);
      users.currentUser = user;
      users.authToken = token;
      users.loading = false;
      users.status = "success";
      users.errors = null;
    },
    userRequestFailed: (users, action) => {
      users.loading = false;
      users.status = "failed";
      users.errors = action.payload;
    },
  },
});

const { userRequested, userReceived, userRequestFailed } = slice.actions;
export default slice.reducer;

export const registerUser = (user) =>
  apiCallBegan({
    url: "/auth/signup/",
    method: "post",
    data: user,
    onStart: userRequested.type,
    onSuccess: userReceived.type,
    onError: userRequestFailed.type,
  });

export const loginUser = (user) =>
  apiCallBegan({
    url: "/auth/login/",
    method: "post",
    data: user,
    onStart: userRequested.type,
    onSuccess: userReceived.type,
    onError: userRequestFailed.type,
  });

// Selector
export const getLoading = createSelector(
  (state) => state.auth.loading,
  (loading) => loading
);

export const getStatus = createSelector(
  (state) => state.auth.status,
  (status) => status
);

//Selectors
export const getCurrentUser = createSelector(
  (state) => state.auth,
  (auth) => auth.currentUser
);
