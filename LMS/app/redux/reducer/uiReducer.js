import {SET_ERRORS, CLEAR_ERRORS,SET_DARK_THEME,SET_LIGHT_THEME} from '../action/types';

const initialState = {
  errors: null,
  loading: false,
  isDarkTheme: false
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
    case SET_DARK_THEME:
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme
      }
    case SET_LIGHT_THEME:
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme
      }
    default:
      return state;
  }
}
