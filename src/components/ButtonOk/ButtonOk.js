import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleEdit } from '../../store/actions';
import * as S from './ButtonOk.style';

function ButtonOk() {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(toggleEdit(true));

  return <S.Button onClick={handleClick}>✔</S.Button>;
}

export default ButtonOk;
