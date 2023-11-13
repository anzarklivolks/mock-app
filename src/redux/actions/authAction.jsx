export const signIn = () => {
    return {
      type: 'SIGN_IN',
    };
  };
  
  export const setAuthenticated = (authenticated) => {
    return {
      type: 'SET_AUTHENTICATED',
      payload: authenticated,
    };
  };
  