import { combineReducers } from 'redux';
import currentUser from './currentUser';
import login from './login';

const rootReducer = combineReducers({
  currentUser,
  login,
});

export default rootReducer;
