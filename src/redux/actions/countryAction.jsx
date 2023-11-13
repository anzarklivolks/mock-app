import axios from 'axios';

export const fetchCountries = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'FETCH_COUNTRIES_REQUEST' }); 

      const response = await axios.get('https://restcountries.com/v2/all?fields=name,region,flag');

      const countriesData = response.data.map((country) => ({
        name: country.name,
        region: country.region,
        flag: country.flag,
        independent: country.independent || false,
      }));

      dispatch({
        type: 'FETCH_COUNTRIES_SUCCESS',
        payload: countriesData,
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_COUNTRIES_FAILURE',
        payload: error.message,
      });
    }
  };
};
