/* eslint-disable import/prefer-default-export */
import { toast } from 'react-toastify';
import axios from 'axios';
import { GET_PROPERTIES } from './action-types';
import { BACKEND_URL } from '../config/index';

export const getProperties = () => async (dispatch) => {
  try {
    const bearerToken = `Bearer ${localStorage.getItem('token')}`;
    const response = await axios.get(`${BACKEND_URL}/property`, {
      headers: { Authorization: bearerToken },
    });
    dispatch({
      type: GET_PROPERTIES,
      response,
    });
  } catch (error) {
    toast.error('Sorry, could not load properties', {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};
