import {
  SET_AUTHENTICATED,
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
  alert('Function is here');
  if (credentials.enroll === '' || credentials.password === '') {
    dispatch({
      type: SET_ERRORS,
      payload: 'Input Fields could not be empty!',
    });
  } else {
    alert('Done');
    axios
      .post('/users/login', credentials, {withCredentials: true})
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
