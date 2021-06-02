import {
    FETCH_VACCINE_REQUEST,
    FETCH_VACCINE_SUCCESS,
    FETCH_VACCINE_ERROR,
  } from "../constants/type";
  const initialValues = {
    loading: false,
    data: {},
    error: null,
  };
  
  const VaccineReducer = (state = initialValues, action) => {
    switch (action.type) {
      case FETCH_VACCINE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_VACCINE_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: null,
        };
      case FETCH_VACCINE_ERROR:
        return {
          ...state,
          loading: false,
          data: {},
          error: action.payload,
        };
      default:
          return state
    }
  };
  
  export default VaccineReducer;
  