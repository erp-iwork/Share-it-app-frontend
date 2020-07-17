import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
// import moment from "moment";

const slice = createSlice({
  name: "profile",
  initialState: {
    info: {},
    loading: false,
    selectedUserId: "",
  },
  reducers: {
    profileRequested: (profile, action) => {
      profile.loading = true;
    },
    profileReceived: (profile, action) => {
      profile.info = action.payload;
      profile.loading = false;
    },
    profileRequestFailed: (profile, action) => {
      profile.loading = false;
    },
  },
});

const {
  profileRequested,
  profileReceived,
  profileRequestFailed,
} = slice.actions;
export default slice.reducer;

const url = "/user/profile/";
export const loadProfile = (userId) =>
  apiCallBegan({
    url: url + userId + "/",
    onStart: profileRequested.type,
    onSuccess: profileReceived.type,
    onError: profileRequestFailed.type,
  });

export const getProfile = createSelector(
  (state) => state.entities.profile,
  (profile) => profile.info
);