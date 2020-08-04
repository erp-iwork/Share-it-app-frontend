import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import axios from "axios";
import { rootApi } from "../store/chat-api";
import * as auth from "../services/authService";
const slice = createSlice({
  name: "chat",
  initialState: {
    list: [],
    loading: false,
    errors: null,
    status: "initial",
    conversationId: null,
    conversations: [],
    selectedConversation: null,
    messagesHistory: [],
    newMessage: null,
  },
  reducers: {
    conversationRequest: (state, action) => {
      state.loading = true;
    },

    conversationFailed: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
      console.log(action.payload);
    },
    conversationSuccess: (state, action) => {
      state.conversations = action.payload;
      state.loading = false;
      state.errors = null;
      state.status = "success";
    },

    selectedConversation: (state, action) => {
      state.selectedConversation = state.conversations.find(
        (item) => item.id === action.payload
      );
    },

    newMessageAdded: (state, action) => {
      console.log("new message added", action.payload);
      state.newMessage = action.payload;
      console.log("getCurrentUser");
      console.log(auth.getUser());
      const currentUserId = auth.getUser() ? auth.getUser().id : null;

      const sender_index = state.conversations.findIndex(
        (item) => item.id === action.payload.sender
      );
      const receiver_index = state.conversations.findIndex(
        (item) => item.id === action.payload.receiver
      );
      if (
        sender_index >= 0 &&
        (currentUserId === action.payload.sender ||
          currentUserId === action.payload.receiver)
      ) {
        state.conversations[sender_index].last_message = action.payload;
      }
      if (receiver_index >= 0 && action.payload.sender === currentUserId) {
        state.conversations[receiver_index].unread = 0;
        state.newMessage = null;
      }
      if (sender_index >= 0 && action.payload.receiver === currentUserId) {
        const count = state.conversations[sender_index].unread + 1;
        state.conversations[sender_index].unread = count;
        const swap = state.conversations[sender_index];
        state.conversations.splice(sender_index, 1);
        state.conversations = [swap, ...state.conversations];
      }

      if (
        receiver_index >= 0 &&
        (currentUserId === action.payload.sender ||
          currentUserId === action.payload.receiver)
      ) {
        state.conversations[receiver_index].last_message = action.payload;
      }
      if (state.selectedConversation) {
        if (
          (state.selectedConversation.id === action.payload.receiver ||
            state.selectedConversation.id === action.payload.sender) &&
          (currentUserId === action.payload.sender ||
            currentUserId === action.payload.receiver)
        ) {
          state.messagesHistory = [action.payload, ...state.messagesHistory];
        }
      }
    },
    messagesReceived: (state, action) => {
      state.messagesHistory = action.payload;
      if (action.payload.id != null) {
        const index = state.conversations.findIndex(
          (item) =>
            item.id === action.payload[0].sender ||
            item.id === action.payload[0].receiver
        );
        state.conversations[index].unread = 0;
      }
    },
  },
});

const {
  conversationSuccess,
  selectedConversation,
  messagesReceived,
  newMessageAdded,
} = slice.actions;

export default slice.reducer;

export const loadConversations = (id) => (dispatch) => {
  return axios
    .get(`${rootApi}/user-list/?id=${id}`)
    .then((response) => {
      return dispatch({
        type: conversationSuccess.type,
        payload: response.data,
      });
    })
    .catch((ex) => {
      console.log(ex.response);
    });
};

export const messagesRequested = (sender, conversationId) => (dispatch) => {
  return axios
    .get(`${rootApi}/chat-history/?sender=${sender}&receiver=${conversationId}`)
    .then((response) => {
      return dispatch({
        type: messagesReceived.type,
        payload: response.data,
      });
    })
    .catch((ex) => {
      console.log(ex.response);
    });
};

export const sendMessage = (data) => async (dispatch) => {
  return dispatch({
    type: "NEW_MESSAGE",
    payload: data,
  });
};

export const newMessage = (e) => (dispatch) => {
  return dispatch({
    type: newMessageAdded.type,
    payload: e.message,
  });
};

export const getConversations = createSelector(
  (state) => state.entities.chat.conversations,
  (conversations) => conversations
);
export const getMessagesHistory = createSelector(
  (state) => state.entities.chat.messagesHistory,
  (messages) => messages
);

export const conversationChanged = (id) => (dispatch) => {
  return dispatch({
    type: selectedConversation.type,
    payload: id,
  });
};

export const getSelectedConversation = createSelector(
  (state) => state.entities.chat.selectedConversation,
  (selectedConversation) => selectedConversation
);

export const filterConversationById = createSelector(
  (state) => state.entities.chat,
  (chats) =>
    chats.conversations.filter((chat) => chat.id === chats.conversationId)
);

export const getUnreadMessageCount = createSelector(
  (state) => state.entities.chat,
  (chat) => chat.newMessage && chat.newMessage.unread
);
