import { combineReducers } from 'redux';
// import demoReducer from './demo';
// import signUpReducer from './signUp';
// import signInReducer from './signIn';
// import forgottenPwdReducer from './forgottenPwd';
// import resetPwdReducer from './resetPwd';

import authReducer from './auth';
import searchReducer from './search';
import modalsReducer from './modals';
import homeReducer from './home';
import userReducer from './user';
import groceryReducer from './grocery';


const rootReducer = combineReducers({
  // demo: demoReducer,
  // signUp: signUpReducer,
  // signIn: signInReducer,
  // forgottenPwd: forgottenPwdReducer,
  // resetPwd: resetPwdReducer,
  auth: authReducer,
  search: searchReducer,
  modals: modalsReducer,
  home: homeReducer,
  user: userReducer,
  grocery: groceryReducer,
  // ... autres reducers
});

export default rootReducer;
