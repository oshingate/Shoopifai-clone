import axios from 'axios';
import { rootUrl } from '../constants/constants';

export const setTokenToAxios = (token) => {
  const newToken = localStorage.getItem('authToken') || '';
  axios.defaults.headers.Authorization = newToken;
};

export const getCurrentUser = () => {
  return (dispatch) => {
    axios
      .get(`${rootUrl}/users/me`)
      .then((res) => {
        dispatch({
          type: 'USER_LOGIN_SUCCESS',
          data: res.data,
        });
      })
      .catch((err) => {
        dispatch({ type: 'USER_LOGIN_FAILED' });
      });
  };
};

export const noToken = () => {
  return (dispatch) => {
    dispatch({
      type: 'NO_TOKEN',
    });
  };
};
