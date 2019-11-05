/* eslint-disable import/prefer-default-export */
import { toast } from 'react-toastify';
import { GET_PROPERTY } from './action-types';
import db from '../config/dbCall';

export const getProperty = (data) => async (dispatch) => {
  try {
    const bearerToken = `Bearer ${localStorage.getItem('token')}`;
    const response = await db.get(`/property/${data.id}`, {
      headers: { Authorization: bearerToken },
    });
    dispatch({
      type: GET_PROPERTY,
      response,
    });
  } catch (error) {
    toast.error('Sorry, could not load the property', {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};
