import { GET_PROPERTY } from '../actions/action-types';

const initialState = {
  data: null,
};

const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROPERTY:
      return { ...state, data: action.response.data.data };
    default:
      return state;
  }
};

export default propertyReducer;
