import { TOGGLE_MENU, TOGGLE_EDIT, TOGGLE_UNIT } from './types';

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const toggleEdit = () => ({
  type: TOGGLE_EDIT,
});

export const toggleUnit = () => ({
  type: TOGGLE_UNIT,
});
