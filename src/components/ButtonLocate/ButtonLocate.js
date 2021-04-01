import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as S from './ButtonLocate.style';
import useHint from '../../hooks/useHints';
import { checkWeatherByCoords } from '../../api';
import { addCity } from '../../store/actions';

function ButtonLocate() {
  const dispatch = useDispatch();
  const { isCelcius } = useSelector((state) => state.menu);

  const { isHintShow, handleHint } = useHint();
  const [error, setError] = useState('');

  const updateError = (err) => {
    setError(err);
    handleHint();
  };

  const checkWeatherByGeo = async ({ coords: { latitude, longitude } }) => {
    const res = await checkWeatherByCoords(latitude, longitude, isCelcius);
    const { name } = res || {};
    if (!name) {
      updateError('Something went wrong');
      return;
    }
    dispatch(addCity(name, isCelcius));
    updateError(`${name} added`);
  };

  const handleError = (err) => updateError(err.message);

  const findMe = () => {
    if (!navigator.geolocation) {
      updateError('Geolocation is not supported by your browser');
      return;
    }

    const params = {
      timeout: 1000,
      maximumAge: 10000,
      enableHighAccuracy: true,
    };

    navigator.geolocation.getCurrentPosition(checkWeatherByGeo, handleError, params);
  };

  return (
    <S.Wrapper>
      <S.Button onClick={findMe}>Find me</S.Button>
      <S.Hint isHintShow={isHintShow}>{error}</S.Hint>
    </S.Wrapper>
  );
}

export default ButtonLocate;
