import React, { useState, useRef, useEffect } from 'react';

import * as S from './Memo.style';

function Memo({ text }) {
  const [isVisible, setIsVisible] = useState(null);
  const previous = useRef(null);

  const handleAnimate = () => {
    if (!isVisible) {
      previous.current = text;
      setIsVisible(true);
    }
  };

  useEffect(() => {
    if (isVisible === null) {
      previous.current = text;
      setIsVisible(true);
      return;
    }

    if (text !== previous.current && isVisible) setIsVisible(false);
  }, [text, isVisible]);

  return (
    <S.Wrapper onAnimationEnd={handleAnimate} isVisible={isVisible}>
      {previous.current}
    </S.Wrapper>
  );
}

export default Memo;
