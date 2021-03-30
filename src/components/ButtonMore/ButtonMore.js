import React from 'react';
import * as S from './ButtonMore.style';

function ButtonMore({ handleClick, isOpen }) {
  return (
    <S.Button onClick={handleClick}>
      <S.Section isOpen={isOpen} />
      <S.Section isOpen={isOpen} />
    </S.Button>
  );
}

export default ButtonMore;
