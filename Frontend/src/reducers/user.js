import {
  CHANGE_USER_FIELD,
} from 'src/actions/user';

const initialState = {
  id:'',
  firstname: '',
  lastname: '',
  email: '',
  userToken: '',
  isConnected: false,
  isMember: false,
};

// Reducer
const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_USER_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default userReducer;
