import { ADD_STAFF } from "./actionTypes";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_STAFF:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
