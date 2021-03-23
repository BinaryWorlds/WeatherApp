import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import citiesReducer from './citiesReducer';

export default combineReducers({
  menu: menuReducer,
  cities: citiesReducer,
});
