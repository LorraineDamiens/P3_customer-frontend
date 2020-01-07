import { COMPANY_EVENT_CHOICE } from "./actionTypes";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case COMPANY_EVENT_CHOICE:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
