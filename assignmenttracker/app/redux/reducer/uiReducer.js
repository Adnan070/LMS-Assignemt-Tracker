import {SET_ERRORS, CLEAR_ERRORS} from '../action/types';

const initialState = {
  errors: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null,
      };
    default:
      return state;
  }
}
