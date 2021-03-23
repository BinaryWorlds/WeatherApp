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
} from './types';

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const toggleEdit = (isEdit, update) => (dispatch) => {
  if (!isEdit) dispatch({ type: COPY_LIST });
  if (update) dispatch({ type: UPDATE_CITIES });
  dispatch({ type: TOGGLE_EDIT });
};

export const toggleUnit = () => ({
  type: TOGGLE_UNIT,
});

export const selectCity = (city) => ({
  type: SELECT_CITY,
  payload: city,
});

export const addCity = (city) => ({
  type: ADD_CITY,
  payload: city,
});

export const deleteCity = (city) => ({
  type: DELETE_CITY,
  payload: city,
});

export const toggleSearch = (isActive) => ({
  type: TOGGLE_SEARCH,
  payload: isActive,
});

export const setResults = (results) => ({
  type: SET_RESULTS,
  payload: results,
});
