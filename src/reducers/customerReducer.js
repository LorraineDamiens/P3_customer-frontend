const initialState = {
  mariage: false,
  soiree: false,
  comment: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CUSTOMER_EVENT_CHOICE":
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
