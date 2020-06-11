import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";

const tokenKey = "token";

const slice = createSlice({
  name: "auth",
  initialState: {
    currentUser: {},
  },
  reducers: {
    userLoggedIn: (auth, action) => {
      const jwt = action.payload;
      auth.currentUser = jwtDecode(jwt);
      localStorage.setItem(tokenKey, jwt);
    },
    userLoggedOut: (auth, action) => {
      auth.currentUser = {};
      localStorage.removeItem(tokenKey);
    },
    userLoggedInWithJwt: (auth, action) => {
      localStorage.setItem(tokenKey, action.payload);
    },
  },
});

const { userLoggedIn, userLoggedOut, userLoggedInWithJwt } = slice.actions;
export default slice.reducer;

//actions
export const login = (email, password) =>
  apiCallBegan({
    url: "/auth",
    method: "post",
    data: { email, password },
    onSuccess: userLoggedIn.type,
  });
export const logout = () => ({
  type: userLoggedOut.type,
});

export const loginWithJwt = (jwt) => ({
  type: userLoggedInWithJwt.type,
  payload: jwt,
});

//Selectors
export const getCurrentUser = createSelector(
  (state) => state.auth,
  (auth) => auth.currentUser
);
