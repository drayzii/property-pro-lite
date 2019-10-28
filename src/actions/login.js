import axios from 'axios';
import { toast } from 'react-toastify';
import { AUTH_SUCCESS, AUTH_ERROR } from './action-types';
import { BACKEND_URL } from '../config/index';

const loginUser = (user) => async (dispatch) => {
  try {
    const {
      email,
      password,
    } = user;
    const response = await axios.post(`${BACKEND_URL}/auth/signin`, {
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
    toast.error(error.response.data.error, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export default loginUser;