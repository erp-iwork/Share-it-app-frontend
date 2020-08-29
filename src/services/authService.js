import store from "store";

const tokenKey = "token";
const userKey = "user";

export function setToken(token) {
  store.set(tokenKey, token);
}

export function getToken() {
  return store.get(tokenKey);
}

export function logout() {
  store.remove(tokenKey);
}

export function setUser(user) {
  store.set(userKey, user);
}

export function getUser() {
  return store.get(userKey);
}

export default {
  getToken,
  setToken,
  getUser,
  setUser,
  logout,
  // getCurrentUser,
};
