import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as S from './Hamburger.style';
import { toggleMenu, toggleEdit } from '../../store/actions';

function Hamburger() {
  const dispatch = useDispatch();
  const { isMenuOpen, isEdit } = useSelector((state) => state.menu);
  const handleClick = () => {
    if (!isMenuOpen) {
      dispatch(toggleMenu());
      return;
    }
    dispatch(toggleEdit());
  };

  return (
    <S.Hamburger onClick={handleClick} aria-label="menu">
      <S.InnerHamburger isOpen={isMenuOpen} isEdit={isEdit} />
    </S.Hamburger>
  );
}

export default Hamburger;
