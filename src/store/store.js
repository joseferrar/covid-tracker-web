import allReducers from "../Reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
