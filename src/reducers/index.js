import { combineReducers } from "redux";

import companyReducer from "./companyReducer";
import miscReducer from "./miscReducer";
import contactReducer from "./contactReducer";
import animationsReducer from "./animationsReducer";
import receptionReducer from "./receptionReducer";
import servicesReducer from "./servicesReducer";
import audiovisualReducer from "./audiovisualReducer";
import staffReducer from "./staffReducer";
import customerReducer from "./customerReducer";

const initialState = {
  contact: {},
  event: {}
};

const reducer = (state = initialState, action) => {
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
        // [payload.key]: value
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
        restaurant: {
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

export default combineReducers({
  contact: contactReducer,
  company: companyReducer,
  customer: customerReducer,
  misc: miscReducer,
  services: servicesReducer
});
