import { combineReducers } from "redux";
import HomeRenderer from "./HomeReducer";
import CountryReducer from "./CountryReducer";
import VaccineReducer from "./VaccineReducer";

const allReducers = combineReducers({
  home: HomeRenderer,
  country: CountryReducer,
  vaccine: VaccineReducer
});

export default allReducers;
