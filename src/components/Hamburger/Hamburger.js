import React from 'react';
import { useDispatch } from 'react-redux';
import * as S from './Hamburger.style';
import { toggleMenu, toggleEdit } from '../../store/actions';

function Hamburger({ isOpen, isEdit }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!isOpen) {
      dispatch(toggleMenu());
      return;
    }
    dispatch(toggleEdit(false));
  };

  return (
    <S.Hamburger onClick={handleClick} aria-label="menu">
      <S.InnerHamburger isOpen={isOpen} isEdit={isEdit} />
    </S.Hamburger>
  );
}

export default Hamburger;
