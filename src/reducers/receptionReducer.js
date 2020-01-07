import { ADD_RECEPTION } from "./actionTypes";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECEPTION:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
