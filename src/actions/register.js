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
      return toast.error('Passwords do not match', {
        position: toast.POSITION.TOP_RIGHT,
      });
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
    toast.error(error.response.data.error, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export default registerUser;
