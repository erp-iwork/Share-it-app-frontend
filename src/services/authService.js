// import jwtDecode from "jwt-decode";

const tokenKey = "token";
const userKey = "user";

export function setToken(token) {
  localStorage.setItem(tokenKey, token);
}

export function getToken() {
  return localStorage.getItem(tokenKey);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function setUser(user) {
  localStorage.setItem(userKey, JSON.stringify(user));
}

export function getUser() {
  return localStorage.getItem(userKey);
}

export default {
  getToken,
  setToken,
  getUser,
  setUser,
  logout,
  // getCurrentUser,
};
