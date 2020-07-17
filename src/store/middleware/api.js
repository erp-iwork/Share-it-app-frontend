import axios from "axios";
import * as actions from "../api";
import { toast } from "react-toastify";
import { getToken } from "../../services/authService";
//TODO
//config file
const token = getToken();
console.log("token", token);
// const baseURL = "https://192.168.1.2:9000/api/v1";
const baseURL = "https://49d53d500294.ngrok.io/api/v1";
if (token) axios.defaults.headers.common["Authorization"] = `Token ${token}`;
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log(error); // log error
    toast.error("An unexpected error occurred."); //display a genereic message
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
      baseURL,
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
