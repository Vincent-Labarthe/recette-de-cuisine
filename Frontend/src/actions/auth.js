// Actions
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_USER = 'SET_USER';
export const REGISTER = 'REGISTER';
export const SET_MEMBER = 'SET_MEMBER';
export const SEND_RESET_PASSWORD = 'SEND_RESET_PASSWORD';
export const ADD_TOKEN = 'ADD_TOKEN';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const SET_CONNECTED_USER = 'SET_CONNECTED_USER';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const CHANGE_USER_DATA = 'CHANGE_USER_DATA';
export const UPDATE_DATA = 'UPDATE_DATA';
export const LOAD_DATA = 'LOAD_DATA';

// Actions Creators
export const changeField = (name, value) => ({
  type: CHANGE_FIELD,
  name,
  value,
});

export const login = () => ({
  type: LOGIN,

});

export const logout = () => ({
  type: LOGOUT,
});

export const setUser = (userToken, result) => ({
  type: SET_USER,
  userToken,
  result,
});

export const register = () => ({
  type: REGISTER,
});

export const setMember = (resultat) =>({
  type: SET_MEMBER,
  resultat,
});

export const sendResetPassword = () => ({
  type: SEND_RESET_PASSWORD,
});

export const addToken = (token) => ({
  type: ADD_TOKEN,
  token,
});

export const resetPassword = () => ({
  type: RESET_PASSWORD,
});

export const setConnectedUser = (userToken, isConnected, isMember) => ({
  type: SET_CONNECTED_USER,
  userToken,
  isConnected,
  isMember,
});

export const saveUserData = (id, firstname, lastname, email, isConnected, isMember) => ({
  type: SAVE_USER_DATA,
  id,
  firstname,
  lastname,
  email,
  isConnected,
  isMember,
});

export const loadData = (userData) => ({
  type: LOAD_DATA,
  userData,
});

export const changeUserData = (id, firstname, lastname, email) => ({
  type: CHANGE_USER_DATA,
  id,
  firstname,
  lastname,
  email,
});

export const updateData = () => ({
  type: UPDATE_DATA,
});
