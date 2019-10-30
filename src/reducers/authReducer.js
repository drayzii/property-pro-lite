import { AUTH_SUCCESS, AUTH_ERROR } from '../actions/action-types';

const initialState = {
  token: null,
  error: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return { ...state, token: action.response.data.data.token, error: false };
    case AUTH_ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
};

export default AuthReducer;
