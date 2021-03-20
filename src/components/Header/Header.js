import React from 'react';
import Hamburger from '../Hamburger/Hamburger';
import ButtonTemp from '../ButtonTemp/ButtonTemp';

import * as S from './Header.style';

function Header() {
  return (
    <S.Header>
      <Hamburger isOpen isEdit />
      <ButtonTemp />
    </S.Header>
  );
}

export default Header;
