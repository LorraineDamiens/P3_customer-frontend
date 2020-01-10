import { CUSTOMER_EVENT_CHOICE } from "./actionTypes";

const initialState = {
  mariage: false,
  soiree: false,
  companyName: "",
  companyFunction: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMER_EVENT_CHOICE:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
