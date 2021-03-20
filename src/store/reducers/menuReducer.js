import { TOGGLE_MENU, TOGGLE_EDIT, TOGGLE_UNIT } from '../actions/types';

const initialState = {
  isMenuOpen: false,
  isEdit: false,
  isCelcius: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state, isMenuOpen: !state.isMenuOpen };
    case TOGGLE_EDIT:
      return { ...state, isEdit: !state.isEdit };
    case TOGGLE_UNIT:
      return { ...state, isCelcius: !state.isCelcius };
    default:
      return state;
  }
};
