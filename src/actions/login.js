import { toast } from 'react-toastify';
import { AUTH_SUCCESS, AUTH_ERROR } from './action-types';
import db from '../config/dbCall';

const loginUser = (user) => async (dispatch) => {
  try {
    const {
      email,
      password,
    } = user;
    const response = await db.post('/auth/signin', {
      email,
      password,
    });
    dispatch({
      type: AUTH_SUCCESS,
      response,
    });
    toast.success('Logged in successfully successfully', {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      error,
    });
    const displayedError = (!error.response) ? error.message : error.response.data.error;
    toast.error(displayedError, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export default loginUser;
