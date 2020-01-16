import { ADD_COMMENT } from "./actionTypes";

const initialState = "";

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return action.payload;

    default:
      return state;
  }
};
