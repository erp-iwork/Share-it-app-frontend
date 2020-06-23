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
    selectedItem: {},
    filterOptions: "",
    errors: null,
  },
  reducers: {
    itemsRequested: (items, action) => {
      items.loading = true;
    },
    itemsReceived: (items, action) => {
      items.list = action.payload;
      items.loading = false;
      items.lastFetch = Date.now();
      items.errors = null;
    },
    itemReceived: (items, action) => {
      items.selectedItem = action.payload;
      items.loading = false;
      items.errors = null;
    },
    itemsRequestFailed: (items, action) => {
      items.loading = false;
      items.errors = action.payload;
    },
    itemAdded: (items, action) => {
      console.log(action.payload);
      items.list.push(action.payload);
      items.loading = false;
      items.errors = null;
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
    itemFiltered: (items, action) => {
      items.filterOptions = action.payload;
    },
  },
});

const {
  itemsRequested,
  itemsReceived,
  itemReceived,
  itemsRequestFailed,
  itemAdded,
  itemUpdated,
  itemRemoved,
  itemFiltered,
} = slice.actions;
export default slice.reducer;

//Action creators
const url = "/item/";

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

export const getItemById = (itemId) =>
  apiCallBegan({
    url: url + itemId,
    onStart: itemsRequested.type,
    onSuccess: itemReceived.type,
    onError: itemsRequestFailed.type,
  });

export const addItem = (item) =>
  apiCallBegan({
    url,
    method: "post",
    data: item,
    onStart: itemsRequested.type,
    onSuccess: itemAdded.type,
    onError: itemsRequestFailed.type,
  });
export const updateItem = (itemId, item) =>
  apiCallBegan({
    url: url + itemId,
    method: "put",
    data: item,
    onSuccess: itemUpdated.type,
  });

export const removeItem = (id) =>
  apiCallBegan({
    url: url + id,
    method: "delete",
    onSuccess: itemRemoved.type,
  });

//Selectors
export const search = (options) => itemFiltered(options);

export const getItems = createSelector(
  (state) => state.entities.items,
  (items) => items.list
);

export const getSelectedItem = createSelector(
  (state) => state.entities.items,
  (items) => items.selectedItem
);

export const getItemsByCategory = createSelector(
  (state) => state.entities.items,
  (items) =>
    items.list.filter((item) =>
      item.category
        ? item.category.category
        : null === items.selectedItem
        ? items.selectedItem.category.category
        : "null"
    )
);

export const getLoading = createSelector(
  (state) => state.entities.items.loading,
  (loading) => loading
);
export const getFilteredItems = createSelector(
  (state) => state.entities.items,
  (items) => {
    if (items.filterOptions.from && items.filterOptions.to) {
      const { from, to } = items.filterOptions;
      return items.list.filter(
        (item) => item.price >= from && item.price <= to
      );
    } else return items.list;
  }
);

export const getErrors = createSelector(
  (state) => state.entities.items.errors,
  (errors) => errors
);
