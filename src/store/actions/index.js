/* eslint-disable prefer-destructuring */
import {
  TOGGLE_MENU,
  TOGGLE_EDIT,
  TOGGLE_UNIT,
  SELECT_CITY,
  ADD_CITY,
  DELETE_CITY,
  COPY_LIST,
  UPDATE_CITIES,
  TOGGLE_SEARCH,
  SET_RESULTS,
  RESTORE_CITY_LIST,
} from './types';
import { checkWeather } from '../../api';

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const toggleEdit = (update) => (dispatch, getState) => {
  const {
    menu: { isEdit },
    cities: { editList },
  } = getState();

  if (!isEdit) dispatch({ type: COPY_LIST });
  if (update) {
    dispatch({ type: UPDATE_CITIES });
    localStorage.setItem('cityList', JSON.stringify(editList));
  }
  dispatch({ type: TOGGLE_EDIT });
};

export const toggleUnit = () => ({
  type: TOGGLE_UNIT,
});

export const selectCity = (city) => ({
  type: SELECT_CITY,
  payload: city,
});

export const deleteCity = (city) => (dispatch) => {
  dispatch({
    type: DELETE_CITY,
    payload: city,
  });
  dispatch(selectCity(''));
};

export const toggleSearch = (isActive) => ({
  type: TOGGLE_SEARCH,
  payload: isActive,
});

export const setResults = (results) => ({
  type: SET_RESULTS,
  payload: results,
});

export const addCity = (city) => async (dispatch, getState) => {
  const {
    cities: { editList },
    menu: { isCelcius },
  } = getState();

  const exist = editList.indexOf(city);
  if (exist !== -1) return;

  const isFetched = await checkWeather(city, isCelcius);
  if (!isFetched) return;

  dispatch({
    type: ADD_CITY,
    payload: city,
  });
  dispatch(toggleSearch(false));
};

export const restoreCityList = (saved) => (dispatch) => {
  dispatch(selectCity(saved[0]));
  dispatch({
    type: RESTORE_CITY_LIST,
    payload: saved,
  });
};

export const nextCity = () => (dispatch, getState) => {
  const {
    cities: { cityList },
    menu: { city, isMenuOpen },
  } = getState();

  if (isMenuOpen || cityList.length < 2) return;

  if (!city) {
    dispatch(selectCity(cityList[0]));
    return;
  }

  const index = cityList.indexOf(city);
  if (index < 0 || index + 1 >= cityList.length) {
    dispatch(selectCity(cityList[0]));
    return;
  }

  dispatch(selectCity(cityList[index + 1]));
};

export const touchMenu = () => (dispatch, getState) => {
  const {
    menu: { isEdit, isMenuOpen, city },
    cities: { cityList },
  } = getState();

  if (isEdit) return;
  if (isMenuOpen && !city) dispatch(selectCity(cityList[0]));
  dispatch(toggleMenu());
};
