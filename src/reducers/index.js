import { combineReducers } from 'redux';
import authReducer from './authReducer';
import propertiesReducer from './propertiesReducer';
import propertyReducer from './propertyReducer';

export default combineReducers({
  auth: authReducer,
  properties: propertiesReducer,
  property: propertyReducer,
});
