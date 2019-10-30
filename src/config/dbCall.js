/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { BACKEND_URL } from './index';

export default axios.create({
  baseURL: BACKEND_URL,
});
