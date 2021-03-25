import React, { useState, useEffect, useRef } from 'react';
import * as S from './Image.style';

function Image({ src, width = 1, height = 1, alt, className }) {
  const [componentWidth, setComponentWidth] = useState(null);
  const componentRef = useRef();

  useEffect(() => {
    setComponentWidth(componentRef.current.offsetWidth);
  }, []);

  const ratio = Math.floor((height * 1000) / width) / 10;

  return (
    <S.Wrapper ref={componentRef} className={className}>
      <S.Container ratio={ratio}>{componentWidth && <S.Image src={src} alt={alt} />}</S.Container>
    </S.Wrapper>
  );
}

export default Image;
