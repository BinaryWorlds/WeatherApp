import {
  TOGGLE_MENU,
  TOGGLE_EDIT,
  TOGGLE_UNIT,
  SELECT_CITY,
  TOGGLE_SEARCH,
} from '../actions/types';

const initialState = {
  isMenuOpen: false,
  isEdit: false,
  isCelcius: true,
  isSearch: false,
  city: 'SARBINOWO',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state, isMenuOpen: !state.isMenuOpen };
    case TOGGLE_EDIT:
      return { ...state, isEdit: !state.isEdit };
    case TOGGLE_UNIT:
      return { ...state, isCelcius: !state.isCelcius };
    case SELECT_CITY:
      return { ...state, city: action.payload, isMenuOpen: false };
    case TOGGLE_SEARCH:
      return { ...state, isSearch: action.payload };
    default:
      return state;
  }
};
