// Types
export const CHANGE_USER_FIELD = 'CHANGE_USER_FIELD';

// Creators
export const changeUserField = (name, value) => ({
  type: CHANGE_USER_FIELD,
  name,
  value,
});


