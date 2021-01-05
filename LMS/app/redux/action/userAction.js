import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USERS,
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
} from './types';
import axios from '../../config/axios';

export const loginUser = (credentials) => async (dispatch) => {
  dispatch({
    type: LOADING_USERS,
  });
  if (credentials.enroll === '' || credentials.password === '') {
    dispatch({
      type: SET_ERRORS,
      payload: 'Input Fields could not be empty!',
    });
  } else {
    axios
      .post('/users/login', credentials)
      .then((data) => {
        console.log(data);

        if (data.data.loginSuccess) {
          dispatch({
            type: SET_USER,
            payload: data.data,
          });

          dispatch({type: CLEAR_ERRORS});
          dispatch({type: SET_AUTHENTICATED});
        } else {
          dispatch({
            type: SET_ERRORS,
            payload: data.data,
          });
        }
      })
      .catch((err) => {
        console.log(err.response);
        console.log(err);
      });
  }
};

export const auth = () => {
  const request = axios
    .get('users/auth')
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
      return 'Something Went Wrong Please try later!';
    });

  return {
    type: AUTH_USER,
    payload: request,
  };
};

export const logout = () => (dispatch) => {
  dispatch({
    type: SET_UNAUTHENTICATED,
  });
};
