import {
    FETCH_COUNTRY_REQUEST,
    FETCH_COUNTRY_SUCCESS,
    FETCH_COUNTRY_ERROR,
  } from "../constants/type";
  
  const initialValues = {
    loading: false,
    data: [],
    error: null,
  };
  
  const CountryReducer = (state = initialValues, action) => {
    switch (action.type) {
      case FETCH_COUNTRY_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_COUNTRY_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: null,
        };
      case FETCH_COUNTRY_ERROR:
        return {
          ...state,
          loading: false,
          data: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default CountryReducer;
  