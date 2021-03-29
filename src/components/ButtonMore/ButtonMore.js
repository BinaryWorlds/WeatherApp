import React, { useState } from 'react';
import * as S from './ButtonMore.style';

function ButtonMore() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    const scrollTo = isOpen ? 0 : window.innerHeight;
    window.scrollTo(0, scrollTo);
    setIsOpen(!isOpen);
  };
  return (
    <S.Button onClick={handleClick}>
      <S.Section isOpen={isOpen} />
      <S.Section isOpen={isOpen} />
    </S.Button>
  );
}

export default ButtonMore;
