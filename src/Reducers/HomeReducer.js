import {
  FETCH_ALL_REQUEST,
  FETCH_ALL_SUCCESS,
  FETCH_ALL_ERROR,
} from "../constants/type";

const initialValues = {
  loading: false,
  data: {},
  error: null,
};

const HomeRenderer = (state = initialValues, action) => {
  switch (action.type) {
    case FETCH_ALL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case FETCH_ALL_ERROR:
      return {
        ...state,
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default HomeRenderer;
