import axios from "axios";
import * as actions from "../api";
import { getToken } from "../../services/authService";
//TODO
//config file
const token = getToken();
console.log("token", token);
if (token) axios.defaults.headers.common["Authorization"] = `Token ${token}`;
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
console.log("process", process.env.REACT_APP_API_URL);
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log(error); // log error
    // toast.error("An unexpected error occurred."); //display a genereic message
  }
  return Promise.reject(error);
});

const api = ({ dispatch, getState }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const { url, method, data, onStart, onSuccess, onError } = action.payload;
  console.log("data", data);
  if (onStart) dispatch({ type: onStart });
  next(action);
  try {
    const response = await axios.request({
      url,
      method,
      data,
    });
    //General
    dispatch(actions.apiCallSuccess(response.data));
    //Specific
    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    //General
    dispatch(actions.apiCallFailed(error.message));
    //Specific
    if (onError) {
      if (
        error.response &&
        (error.response.status === 400 ||
          error.response.status === 403 ||
          error.response.status === 401)
      ) {
        console.log(error.response.data.errors);
        dispatch({ type: onError, payload: error.response.data.errors });
      } else dispatch({ type: onError, payload: error.message });
    }
  }
};

export default api;
