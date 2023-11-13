import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authreducer';
import countriesReducer from './reducers/countryReducers';

const rootReducer = combineReducers({
  auth: authReducer,
  countries: countriesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
