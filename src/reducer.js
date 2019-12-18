const initialState = {
  contact: {},
  event: {}
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT_INFOS":
      return {
        ...state,
        contact: {
          ...state.contact,
          ...payload
        }
      };
    case "CUSTOMER_EVENT_CHOICE":
      return {
        ...state,
        event: { ...state.event, ...payload }
      };

    case "COMPANY_EVENT_CHOICE":
      return {
        ...state,
        event: { ...state.event, ...payload }
      };

    case "MISC_INFOS":
      return {
        ...state,
        misc: { ...state.misc, ...payload }
      };

    case "SERVICES":
      return {
        ...state,
        services: { ...state.services, ...payload }
      };
    case "ANIMATIONS":
      return {
        ...state,
        animations: [...payload]
      };
    case "RECEPTION":
      return {
        ...state,
        reception: {
          selection: [...payload.selection],
          preference: payload.preference
        }
      };
    case "RESTAURANTS":
      return {
        ...state,
        reception: {
          selection: [...payload.selection],
          preference: payload.preference
        }
      };
    case "AUDIOVISUAL":
      return {
        ...state,
        audiovisual: [...payload]
      };
    case "STAFF":
      return {
        ...state,
        staff: [...payload]
      };
    default:
      return state;
  }
};
