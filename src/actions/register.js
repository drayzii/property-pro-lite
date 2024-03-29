/* eslint-disable consistent-return */
import { toast } from 'react-toastify';
import { AUTH_SUCCESS, AUTH_ERROR } from './action-types';
import db from '../config/dbCall';

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
    const response = await db.post('/auth/signup', {
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
