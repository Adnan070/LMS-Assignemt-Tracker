import {SET_DARK_THEME, SET_LIGHT_THEME} from './types';

export const toggleTheme = (toggle) => (dispatch) => {
  if (toggle) {
    dispatch({
      type: SET_DARK_THEME,
    });
  } else {
    dispatch({
      type: SET_LIGHT_THEME,
    });
  }
};
