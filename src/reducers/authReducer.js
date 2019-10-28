const initState = {
  token: null,
};

const SignUpReducer = (state = initState, action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return { token: action.response.data.data.token };
    case 'AUTH_ERROR':
      return state;
    default:
      return state;
  }
};

export default SignUpReducer;
