const initialState = {
    isAuthenticated: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SIGN_IN':
        return {
          ...state,
          isAuthenticated: true,
        };
      case 'SET_AUTHENTICATED':
        return {
          ...state,
          isAuthenticated: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  