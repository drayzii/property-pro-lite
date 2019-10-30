/* eslint-disable import/prefer-default-export */
import { toast } from 'react-toastify';
import { GET_PROPERTIES } from './action-types';
import db from '../config/dbCall';

export const getProperties = () => async (dispatch) => {
  try {
    const bearerToken = `Bearer ${localStorage.getItem('token')}`;
    const response = await db.get('/property', {
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
