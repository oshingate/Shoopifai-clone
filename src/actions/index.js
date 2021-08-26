import axios from 'axios';
import { rootUrl } from '../constants/constants';

export const setTokenToAxios = (token) => {
  const newToken = localStorage.getItem('authToken') || '';
  axios.defaults.headers.Authorization = newToken;
};

export const getCurrentUser = () => {
  const newToken = localStorage.getItem('authToken') || '';
  return (dispatch) => {
    axios
      .get(
        `${rootUrl}users/me`,
        {
          //...data
        },
        {
          headers: {
            Authorization: newToken,
          },
        }
      )
      .then((res) => {
        console.log(res.data.user);

        dispatch({
          type: 'USER_LOGIN_SUCCESS',
          data: res.data.user,
        });
      })
      .catch((err) => {
        console.log(err);
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
