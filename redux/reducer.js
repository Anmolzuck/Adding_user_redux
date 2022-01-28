import * as types from "./actionType";

const intialState = {
  books: [],
  book: {},
  laoding: false,
};

const userReducers = (state = intialState, action) => {
  switch (action.type) {
    case types.SIGNUP_USER:
    case types.LOGIN_USER:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducers;
