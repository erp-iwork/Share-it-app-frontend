// import jwtDecode from "jwt-decode";

const tokenKey = "token";
const userKey = "user";

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export function setUser(user) {
  localStorage.setItem(userKey, user);
}

export function getUser() {
  return localStorage.getItem(userKey);
}

export default {
  loginWithJwt,
  getUser,
  setUser,
  logout,
  // getCurrentUser,
  getJwt,
};
