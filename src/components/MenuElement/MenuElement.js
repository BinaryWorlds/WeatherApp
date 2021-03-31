import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCity, toggleMenu, deleteCity } from '../../store/actions';
import * as S from './MenuElement.style';
import { checkWeather } from '../../api';
import { getIcon } from '../../utils/icon';
import { getLocalTime } from '../../utils/time';

const refreshInterval = 1000;

function MenuElement({ city }) {
  const dispatch = useDispatch();
  const { isEdit, isCelcius } = useSelector((state) => state.menu);

  const [weather, setWeather] = useState(null);

  const textRef = useRef();
  const timerId = useRef();

  const handleSelect = () => {
    if (isEdit) return;
    dispatch(selectCity(city));
    dispatch(toggleMenu());
  };

  const handleDelete = () => dispatch(deleteCity(city));

  const updateText = (timezone) => {
    if (textRef.current) textRef.current.innerText = getLocalTime(timezone);
  };

  useEffect(async () => {
    const { name, timezone, temp, icon, description } = await checkWeather(city, isCelcius);

    setWeather({ name, timezone, temp, icon, description });

    updateText(timezone);
    timerId.current = setInterval(() => {
      if (textRef.current) updateText(timezone);
      else clearInterval(timerId.current);
    }, refreshInterval);

    return () => clearInterval(timerId.current);
  }, [isCelcius]);

  return (
    weather && (
      <S.Wrapper onClick={handleSelect}>
        <S.Name>{weather.name}</S.Name>
        <S.Image src={getIcon(weather.icon)} alt={weather.description} />
        <S.Section>
          <S.Text ref={textRef} />
          {isEdit ? (
            <S.Delete onClick={handleDelete} />
          ) : (
            <S.Text>{`${weather.temp}${isCelcius ? 'C' : 'F'}`}</S.Text>
          )}
        </S.Section>
      </S.Wrapper>
    )
  );
}

export default MenuElement;
