const initialState = {
    countries: [],
    loading: false,
    error: null,
  };
  
  const countryReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_COUNTRIES_SUCCESS':
        return {
          ...state,
          countries: action.payload,
          loading: false,
          error: null,
        };
      case 'FETCH_COUNTRIES_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default countryReducer;
  