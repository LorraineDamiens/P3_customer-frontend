import { ADD_AUDIOVISUAL } from "./actionTypes";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_AUDIOVISUAL:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
