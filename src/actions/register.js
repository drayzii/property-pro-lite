/* eslint-disable consistent-return */
import axios from 'axios';
import { toast } from 'react-toastify';
import { AUTH_SUCCESS, AUTH_ERROR } from './action-types';
import { BACKEND_URL } from '../config/index';

const registerUser = (user) => async (dispatch) => {
  try {
    const {
      firstName,
      lastName,
      userName,
      email,
      password,
      confirmPassword,
      phoneNumber,
      address,
    } = user;
    if (confirmPassword !== password) {
      throw new Error('Passwords do not match');
    }
    const response = await axios.post(`${BACKEND_URL}/auth/signup`, {
      firstName,
      lastName,
      userName,
      email,
      password,
      phoneNumber,
      address,
    });
    dispatch({
      type: AUTH_SUCCESS,
      response,
    });
    toast.success('Registered successfully', {
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

export default registerUser;
