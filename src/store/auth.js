import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
import { setUser } from "../services/authService";

const tokenKey = "token";

const slice = createSlice({
  name: "auth",
  initialState: {
    currentUser: {},
    authToken: "",
    loading: false,
    status: "initial",
    error: {},
  },
  reducers: {
    userRequested: (users, action) => {
      users.loading = true;
    },
    userLoggedIn: (users, action) => {
      const { user, token } = action.payload;
      localStorage.setItem(tokenKey, token);
      localStorage.setItem("user", JSON.stringify(user));
      users.currentUser = user;
      users.authToken = token;
      users.loading = false;
      users.status = "success";
      users.error = null;
    },
    userReceived: (users, action) => {
      users.currentUser = action.payload;
      setUser(action.payload);
      users.loading = false;
      users.status = "success";
      users.error = null;
    },
    userRequestFailed: (users, action) => {
      users.loading = false;
      users.status = "failed";
      users.error = action.payload;
    },
  },
});

const {
  userRequested,
  userReceived,
  userRequestFailed,
  userLoggedIn,
} = slice.actions;
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
    onSuccess: userLoggedIn.type,
    onError: userRequestFailed.type,
  });

// Selector
export const getUser = createSelector(
  (state) => state.auth,
  (auth) => auth.currentUser
);
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
