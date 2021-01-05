import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USERS,
  SET_USER,
} from '../action/types';

const initialState = {
  credentials: {},
  authenticated: false,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case LOADING_USERS:
      return {
        ...state,
        loading: true,
      };
    case SET_USER:
      return {
        ...state,
        loading: false,
        credentials: action.payload,
      };
    default:
      return state;
  }
}
