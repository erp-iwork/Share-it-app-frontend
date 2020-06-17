import axios from "axios";
import * as actions from "../api";
//TODO
//config file
const baseURL = "https://shareit-develop.herokuapp.com/api/v1";

const api = ({ dispatch, getState }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const { url, method, data, onStart, onSuccess, onError } = action.payload;
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
        (error.response.status === 400 || error.response.status === 403)
      ) {
        console.log(error.response.data);
        dispatch({ type: onError, payload: error.response.data });
      } else dispatch({ type: onError, payload: error.message });
    }
  }
};

export default api;
