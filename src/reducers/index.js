import { combineReducers } from "redux";

import companyReducer from "./companyReducer";
import miscReducer from "./miscReducer";
import contactReducer from "./contactReducer";
import servicesReducer from "./servicesReducer";
import customerReducer from "./customerReducer";

export default combineReducers({
  contact: contactReducer,
  company: companyReducer,
  customer: customerReducer,
  misc: miscReducer,
  services: servicesReducer
});
