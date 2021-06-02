import { APP_URL } from "../apis";
import {
  FETCH_ALL_REQUEST,
  FETCH_ALL_SUCCESS,
  FETCH_ALL_ERROR,
  FETCH_COUNTRY_REQUEST,
  FETCH_COUNTRY_SUCCESS,
  FETCH_COUNTRY_ERROR,
  FETCH_VACCINE_REQUEST,
  FETCH_VACCINE_SUCCESS,
  FETCH_VACCINE_ERROR
} from "../constants/type";
import axios from "axios";

export const All_Cases = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_ALL_REQUEST,
    });
    axios
      .get(`${APP_URL}/all`)
      .then((response) => {
        dispatch({
          type: FETCH_ALL_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ALL_ERROR,
          payload: error,
        });
      });
  };
};

export const CountryAction = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_COUNTRY_REQUEST,
    });
    axios
      .get(`${APP_URL}/countries`)
      .then((response) => {
        dispatch({
          type: FETCH_COUNTRY_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_COUNTRY_ERROR,
          payload: error,
        });
      });
  };
};


export const VaccineAction = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_VACCINE_REQUEST,
    });
    axios
      .get(`${APP_URL}/vaccine`)
      .then((response) => {
        dispatch({
          type: FETCH_VACCINE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_VACCINE_ERROR,
          payload: error,
        });
      });
  };
};

