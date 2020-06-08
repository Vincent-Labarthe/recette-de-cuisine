import {
  CHANGE_FIELD,
  SET_USER,
  SET_MEMBER,
  ADD_TOKEN,
  SET_CONNECTED_USER,
  SAVE_USER_DATA,
  CHANGE_USER_DATA,
  LOAD_DATA,
} from 'src/actions/auth';

// newGroceryList is not linked to auth actions per se,
// but we need to reuse the CHANGE FIELD action
const initialState = {
  id: '',
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
  newGroceryList: '',
  userToken: '',
  passwordToken: '',
  isConnected: false,
  isMember: false,
};

// Reducer
const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };

    case SET_USER:
      return {
        ...state,
        userToken: action.userToken,
        isConnected: action.result,
        isMember: true,
      };

    case SET_MEMBER:
      return {
        ...state,
        isMember: action.resultat,
      }

    case ADD_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case SET_CONNECTED_USER:
      return {
        ...state,
        userToken: action.userToken,
        isConnected: action.isConnected,
        isMember: true,
      };

    case SAVE_USER_DATA:
      return {
        ...state,
        id: action.id,
        firstname: action.firstname,
        lastname: action.lastname,
        email: action.email,
        isConnected: action.isConnected,
        isMember: action.isMember,
      };

    case CHANGE_USER_DATA:
      return {
        ...state,
        id: action.id,
        firstname: action.firstname,
        lastname: action.lastname,
        email: action.email,
      };

    case LOAD_DATA:
      return {
        ...state,
        id: action.userData.id,
        firstname: action.userData.firstname,
        lastname: action.userData.lastname,
        email: action.userData.email,
        shoppingList: action.userData.shoppingList,
        isConnected: true,
        isMember: true,
      };

    default:
      return state;
  }
};

export default authReducer;
