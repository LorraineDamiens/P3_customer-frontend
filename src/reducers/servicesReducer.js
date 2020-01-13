import { ADD_ACTIVITY, REMOVE_ACTIVITY } from "./actionTypes";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACTIVITY:
      return [...state, action.payload];
    case REMOVE_ACTIVITY:
      return state.filter(act => act.activities !== action.payload.activities);
    default:
      return state;
  }
};
