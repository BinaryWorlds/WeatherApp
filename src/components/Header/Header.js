import React from 'react';
import { useSelector } from 'react-redux';
import Hamburger from '../Hamburger/Hamburger';
import ButtonTemp from '../ButtonTemp/ButtonTemp';
import ButtonOk from '../ButtonOk/ButtonOk';
import * as S from './Header.style';
import ButtonLocate from '../ButtonLocate/ButtonLocate';
import Memo from '../Memo/Memo';

function Header() {
  const { isMenuOpen, isEdit, city } = useSelector((state) => state.menu);

  return (
    <S.Header isOpen={isMenuOpen}>
      <Hamburger isOpen={isMenuOpen} isEdit={isEdit} />
      {!isMenuOpen && city && <Memo text={city.toUpperCase()} />}
      {isEdit && <ButtonLocate />}
      {isEdit ? <ButtonOk /> : <ButtonTemp />}
    </S.Header>
  );
}

export default Header;
