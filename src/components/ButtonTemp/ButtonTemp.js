import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleUnit } from '../../store/actions';
import * as S from './ButtonTemp.style';

function ButtonTemp() {
  const dispatch = useDispatch();
  const { isCelcius } = useSelector((state) => state.menu);
  const handleClick = () => dispatch(toggleUnit());

  return (
    <S.Button onClick={handleClick} isCelcius={isCelcius}>
      <p>C°</p> / <p>F°</p>
    </S.Button>
  );
}

export default ButtonTemp;
