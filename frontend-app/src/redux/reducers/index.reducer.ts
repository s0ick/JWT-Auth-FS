import {combineReducers} from 'redux';

import {userDataReducer} from './auth-user-reducer';
import {alertReducer} from './alert-reducer';
import {usersReducer} from './users-reducer';

export const rootReducer = combineReducers({
  user: userDataReducer,
  alert: alertReducer,
  users: usersReducer
});
