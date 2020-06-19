import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
import moment from "moment";

const slice = createSlice({
  name: "items",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    itemsRequested: (items, action) => {
      items.loading = true;
    },
    itemsReceived: (items, action) => {
      items.list = action.payload;
      items.loading = false;
      items.lastFetch = Date.now();
    },
    itemsRequestFailed: (items, action) => {
      items.loading = false;
    },
    itemAdded: (items, action) => {
      items.list.push(action.payload.item);
    },
    itemUpdated: (items, action) => {
      const index = items.list.findIndex(
        (item) => item.id === action.payload.item.id
      );
      items.list[index] = action.payload.item;
    },
    itemRemoved: (items, action) => {
      const index = items.list.findIndex(
        (item) => item.id === action.payload.item.id
      );
      items.list.splice(index, 1);
    },
  },
});

const {
  itemsRequested,
  itemsReceived,
  itemsRequestFailed,
  itemAdded,
  itemUpdated,
  itemRemoved,
} = slice.actions;
export default slice.reducer;

//Action creators
const url = "/item";

export const loadItems = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.items;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) return;

  return dispatch(
    apiCallBegan({
      url,
      onStart: itemsRequested.type,
      onSuccess: itemsReceived.type,
      onError: itemsRequestFailed.type,
    })
  );
};

export const addItem = (item) =>
  apiCallBegan({
    url,
    method: "post",
    data: item,
    onSuccess: itemAdded.type,
  });
export const updateItem = (itemId, item) =>
  apiCallBegan({
    url: url + "/" + itemId,
    method: "put",
    data: item,
    onSuccess: itemUpdated.type,
  });

export const removeItem = (id) =>
  apiCallBegan({
    url: url + "/" + id,
    method: "delete",
    onSuccess: itemRemoved.type,
  });

//TODO remove filter
export const getItems = createSelector(
  (state) => state.entities.items,
  (items) =>
    items.list.filter(
      (item) => item.itemId !== "583358b9-2e21-4b42-9677-aaf629409174"
    )
);
