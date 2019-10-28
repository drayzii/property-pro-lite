const initialState = {
  properties: [],
};

const propertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROPERTIES':
      return { ...state, properties: action.response.data.data };
    default:
      return state;
  }
};

export default propertiesReducer;
