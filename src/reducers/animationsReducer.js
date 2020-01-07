import { ADD_ANIMATION } from "./actionTypes";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ANIMATION:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
