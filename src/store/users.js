import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
// import moment from "moment";

const slice = createSlice({
  name: "users",
  initialState: {
    profile: {},
    user: {},
    loading: false,
    subcategoriesList: [],
  },
  reducers: {
    usersRequested: (users, action) => {
      users.loading = true;
    },
    profileReceived: (users, action) => {
      users.profile = action.payload;
      users.loading = false;
    },
    usersRequestFailed: (users, action) => {
      users.loading = false;
    },
    userUpdated: (users, action) => {
      users.user = action.payload;
    },
  },
});
const {
  usersRequested,
  profileReceived,
  usersRequestFailed,
  userUpdated,
} = slice.actions;
export default slice.reducer;

const url = "/user/profile/";
export const loadProfile = () =>
  apiCallBegan({
    url,
    onStart: usersRequested.type,
    onSuccess: profileReceived.type,
    onError: usersRequestFailed.type,
  });
export const updateUser = (userId, user) =>
  apiCallBegan({
    url: "/user/" + userId,
    method: "put",
    data: user,
    onSuccess: userUpdated.type,
  });
//Selector
export const getProfile = createSelector(
  (state) => state.entities.users,
  (users) => users.profile
);
