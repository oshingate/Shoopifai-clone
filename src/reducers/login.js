import axios from 'axios';

import { loginUrl } from '../constants/constants';

const initialState = {
  email: 'oshingate@gmail.com',
  username: 'oshingate',
  password: null,
  error: { email: 'hello', username: 'null', password: 'null' },
};

function login(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_FIELD_UPDATE':
      return { ...state, [action.payload.name]: action.payload.value };
    case 'LOGIN_ACTION':
      let body = { email: state.email, password: state.password };
      axios
        .post(loginUrl, body)
        .then((res) => {
          let { token, user, error } = res.data;
          console.log('data', token, user, error);
          if (error) {
            console.log('error', { ...state, error });
            return { ...state, error };
          }
        })
        .catch((error) => {
          return { ...state, error: { email: error } };
        });
      console.log('action');
      break;

    default:
      return state;
  }
}

export default login;
