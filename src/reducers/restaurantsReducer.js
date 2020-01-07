import { ADD_RESTAURANTS } from "./actionTypes";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESTAURANTS:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
