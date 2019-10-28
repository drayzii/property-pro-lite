import { combineReducers } from 'redux';
import authReducer from './authReducer';
import propertiesReducer from './propertiesReducer';

export default combineReducers({
  auth: authReducer,
  properties: propertiesReducer,
});
