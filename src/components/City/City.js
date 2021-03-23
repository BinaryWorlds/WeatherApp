import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './City.style';

function City() {
  const {
    menu: { city },
  } = useSelector((state) => state);

  return <S.Wrapper>{city}</S.Wrapper>;
}

export default City;
