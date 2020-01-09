import { ADD_MISC_INFOS } from "./actionTypes";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISC_INFOS:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
