import React, { useState, useEffect, useRef } from 'react';
import * as S from './Image.style';

function Image({ src, width = 1, height = 1, alt, className }) {
  const [componentWidth, setComponentWidth] = useState(null);
  const componentRef = useRef();

  const [isVisible, setIsVisible] = useState(null);
  const previous = useRef(null);

  const handleAnimate = () => {
    if (!isVisible) {
      previous.current = { src, alt };
      setIsVisible(true);
    }
  };

  useEffect(() => {
    setComponentWidth(componentRef.current.offsetWidth);
  }, []);

  useEffect(() => {
    if (!componentWidth || !src) return;
    if (isVisible === null) {
      previous.current = { src, alt };
      setIsVisible(true);
      return;
    }
    if (src !== previous.current.src && isVisible) setIsVisible(false);
  }, [src, alt, isVisible, componentWidth]);

  const ratio = Math.floor((height * 1000) / width) / 10;

  return (
    <S.Wrapper ref={componentRef} className={className}>
      <S.Container ratio={ratio}>
        {componentWidth && previous.current && (
          <S.Image
            onAnimationEnd={handleAnimate}
            isVisible={isVisible}
            src={previous.current.src}
            alt={previous.current.alt}
          />
        )}
      </S.Container>
    </S.Wrapper>
  );
}

export default Image;
