import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const tokenKey = "token";

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    userRegistered: (users, action) => {
      localStorage.setItem(tokenKey, action.payload.token);
      //TODO
      //login with jwt a
    },
  },
});

const { userRegistered } = slice.actions;

export const registerUser = (user) =>
  apiCallBegan({
    url: "/users",
    method: "post",
    data: user,
    onSuccess: userRegistered.type,
  });

export default slice.reducer;
