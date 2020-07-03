import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
import moment from "moment";
import _ from "lodash";

const slice = createSlice({
  name: "items",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
    selectedItem: {},
    filterOptions: "",
    searchQuery: "",
    errors: null,
    status: "initial",
    searchedItems: [],
    myItems: [],
    filterdItems: [],
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
    myItemReceived: (items, action) => {
      items.myItems = action.payload;
      items.loading = false;
      items.errors = null;
    },
    itemsRequestFailed: (items, action) => {
      items.loading = false;
      items.errors = action.payload;
      items.status = "failed";
    },
    itemAdded: (items, action) => {
      console.log(action.payload);
      items.list.push(action.payload);
      items.loading = false;
      items.errors = null;
      items.status = "success";
    },
    itemUpdated: (items, action) => {
      let index = items.list.findIndex(
        (item) => item.itemId === action.payload.itemId
      );
      items.list[index] = action.payload.item;

      //update myitems list
      index = items.myItems.findIndex(
        (item) => item.itemId === action.payload.itemId
      );
      items.myItems[index] = action.payload;
      items.loading = false;
    },
    itemRemoved: (items, action) => {
      const index = items.list.findIndex(
        (item) => item.id === action.payload.item.id
      );
      items.list.splice(index, 1);
    },
    itemFiltered: (items, action) => {
      // items.filterOptions = action.payload;
      items.filterdItems = action.payload;
      items.loading = false;
      items.errors = null;
    },
    itemSearched: (items, action) => {
      items.searchedItems = action.payload;
      items.loading = false;
      items.errors = null;
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
  itemSearched,
  myItemReceived,
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
    url: url + itemId + "/",
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

export const searchItems = (query) =>
  apiCallBegan({
    url: "/items?search=" + query,
    onSuccess: itemSearched,
    onStart: itemsRequested.type,
    onError: itemsRequestFailed.type,
  });

//action creators for profile
export const loadMyItems = () =>
  apiCallBegan({
    url: "/my_items/",
    onStart: itemsRequested.type,
    onSuccess: myItemReceived.type,
    onError: itemsRequestFailed.type,
  });

const makeUrl = (options) => {
  const {
    sub_category,
    category,
    min_price,
    max_price,
    condition,
    search,
  } = options;
  return `items?sub_category=${sub_category ? sub_category : ""}&category=${
    category ? category : ""
  }&min_price=${min_price ? min_price : ""}&max_price=${
    max_price ? max_price : ""
  }&condition=${condition ? condition : ""}&search=${search ? search : ""}`;
};

export const loadFilteredItems = (options) =>
  apiCallBegan({
    url: makeUrl(options),
    onStart: itemsRequested.type,
    onSuccess: itemFiltered.type,
    onError: itemsRequestFailed.type,
  });
//Selectors

export const getItems = createSelector(
  (state) => state.entities.items,
  (items) => _.orderBy(items.list, "title", "asc")
);

export const getSelectedItem = createSelector(
  (state) => state.entities.items,
  (items) => items.selectedItem
);

export const getItemsByCategory = createSelector(
  (state) => state.entities.items.list,
  (items) =>
    items.filter((item) =>
      item.sub_category
        ? item.sub_category.id
        : null == items.selectedItem
        ? items.selectedItem.sub_category.id
        : "null"
    )
);

export const getLoading = createSelector(
  (state) => state.entities.items.loading,
  (loading) => loading
);
export const getFilteredItems = createSelector(
  // (state) => state.entities.items,
  // (items) => {
  //   if (
  //     _.has(items.filterOptions, "from") &&
  //     _.has(items.filterOptions, "to")
  //   ) {
  //     const { from, to } = items.filterOptions;
  //     return items.list.filter(
  //       (item) => item.price >= from && item.price <= to
  //     );
  //   } else return items.list;
  // },
  // (items) => {
  //   if (_.has(items.filterOptions, "query")) {
  //     const { query } = items.filterOptions;
  //     return items.list.filter((item) => item.title.startsWith(query));
  //   } else return items.list;
  // }
  (state) => state.entities.items,
  (items) => items.filterdItems
);

export const getErrors = createSelector(
  (state) => state.entities.items.errors,
  (errors) => errors
);

export const getStatus = createSelector(
  (state) => state.entities.items.status,
  (status) => status
);

export const getSearchedItems = createSelector(
  (state) => state.entities.items.searchedItems,
  (items) => items
);

export const getMyItems = createSelector(
  (state) => state.entities.items.myItems,
  (myItems) => myItems
);
