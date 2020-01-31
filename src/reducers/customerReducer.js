import { CUSTOMER_EVENT_CHOICE } from "./actionTypes";

const initialState = {
  mariage: false,
  soiree: false,
  anniversaire: false,
  evg: false,
  evjf: false,
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
