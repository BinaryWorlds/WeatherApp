import React from 'react';
import { useSelector } from 'react-redux';
import Hamburger from '../Hamburger/Hamburger';
import ButtonTemp from '../ButtonTemp/ButtonTemp';
import ButtonOk from '../ButtonOk/ButtonOk';
import * as S from './Header.style';

function Header() {
  const { isMenuOpen, isEdit } = useSelector((state) => state.menu);

  return (
    <S.Header>
      <Hamburger isOpen={isMenuOpen} isEdit={isEdit} />
      {isEdit ? <ButtonOk /> : <ButtonTemp />}
    </S.Header>
  );
}

export default Header;
