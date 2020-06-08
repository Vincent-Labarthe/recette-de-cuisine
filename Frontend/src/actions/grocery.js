// Types
export const CHANGE_GROCERY_FIELD = 'CHANGE_GROCERY_FIELD';
export const ADD_GROCERY_LIST = 'ADD_GROCERY_LIST';
export const ADD = 'ADD';

// Creators
export const changeGroceryField = (name, value) => ({
  type: CHANGE_GROCERY_FIELD,
  name,
  value,
});

export const addGroceryList = () => ({
  type: ADD_GROCERY_LIST,
});

export const add = (title) => ({
  type: ADD,
  title,
});
