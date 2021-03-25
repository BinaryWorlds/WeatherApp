import {
  UPDATE_CITIES,
  ADD_CITY,
  DELETE_CITY,
  COPY_LIST,
  SET_RESULTS,
  RESTORE_CITY_LIST,
} from '../actions/types';

const initialState = {
  cityList: [],
  editList: [],
  results: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CITIES:
      return { ...state, cityList: state.editList.slice(0), editList: [] };

    case COPY_LIST:
      return { ...state, editList: state.cityList.slice(0) };

    case ADD_CITY:
      return { ...state, editList: [...state.editList, action.payload] };

    case DELETE_CITY:
      return { ...state, editList: state.editList.filter((item) => item !== action.payload) };

    case SET_RESULTS:
      return { ...state, results: action.payload.slice(0) };

    case RESTORE_CITY_LIST:
      return { ...state, cityList: action.payload.slice(0) };

    default:
      return state;
  }
};
