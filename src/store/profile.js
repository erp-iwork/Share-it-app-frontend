import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
// import moment from "moment";

const slice = createSlice({
  name: "profile",
  initialState: {
    info: {},
    loading: false,
    status: "initial",
    errors: null,
  },
  reducers: {
    profileRequested: (profile, action) => {
      profile.loading = true;
    },
    profileReceived: (profile, action) => {
      profile.info = action.payload;
      profile.loading = false;
      profile.errors = null;
    },
    profileRequestFailed: (profile, action) => {
      profile.loading = false;
      profile.errors = action.payload;
      profile.status = "failed";
    },
    profileUpdated: (profile, action) => {
      // profile.info = action.payload;
      console.log("profile updated", action.payload);
      profile.loading = false;
      profile.errors = null;
      profile.status = "success";
    },
    profileErrorsAndStatusReseted: (profile, action) => {
      profile.errors = null;
      profile.status = "initial";
    },
  },
});

const {
  profileRequested,
  profileReceived,
  profileRequestFailed,
  profileUpdated,
  profileErrorsAndStatusReseted,
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
export const updateProfile = (userId, profile) =>
  apiCallBegan({
    url: url + userId + "/",
    method: "put",
    data: profile,
    onStart: profileRequested.type,
    onSuccess: profileUpdated.type,
    onError: profileRequestFailed.type,
  });

export const resetProfileErrorsAndStatus = () =>
  profileErrorsAndStatusReseted();
export const getProfile = createSelector(
  (state) => state.entities.profile,
  (profile) => profile.info
);

export const getErrors = createSelector(
  (state) => state.entities.profile,
  (profile) => profile.errors
);

export const getStatus = createSelector(
  (state) => state.entities.profile,
  (profile) => profile.status
);

export const getLoading = createSelector(
  (state) => state.entities.profile,
  (profile) => profile.loading
);
