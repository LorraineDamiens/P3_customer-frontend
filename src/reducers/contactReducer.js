const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT_INFOS":
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
