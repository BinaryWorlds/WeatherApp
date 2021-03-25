import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCity, deleteCity } from '../../store/actions';
import * as S from './MenuElement.style';
import { checkWeather } from '../../api';
import { getLocalTime } from '../../utils/time';

const refreshInterval = 1000;

function MenuElement({ city }) {
  const dispatch = useDispatch();
  const { isEdit, isCelcius } = useSelector((state) => state.menu);

  const [weather, setWeather] = useState({});
  const { name, main: { temp } = {}, weather: { 0: { icon } = [] } = {} } = weather;

  const textRef = useRef();
  const timerId = useRef();
  const timezone = useRef(weather.timezone || 0);

  const handleSelect = () => {
    if (!isEdit) dispatch(selectCity(city));
  };

  const handleDelete = () => dispatch(deleteCity(city));

  const updateText = () => {
    textRef.current.innerText = getLocalTime(timezone.current);
  };

  useEffect(async () => {
    const data = await checkWeather(city, isCelcius);
    setWeather(data);

    timezone.current = data.timezone;
    updateText();
    timerId.current = setInterval(() => {
      if (textRef.current) updateText();
      else clearInterval(timerId.current);
    }, refreshInterval);

    return () => clearInterval(timerId.current);
  }, [isCelcius]);

  return (
    <S.Wrapper onClick={handleSelect}>
      <S.Name>{name}</S.Name>
      {icon && <S.Image src={`https://www.openweathermap.org/img/wn/${icon}@2x.png`} />}
      <S.Section>
        <S.Text ref={textRef} />
        {isEdit ? (
          <S.Delete onClick={handleDelete} />
        ) : (
          <S.Text>
            {Math.floor(temp)}
            {isCelcius ? '°C' : '°F'}
          </S.Text>
        )}
      </S.Section>
    </S.Wrapper>
  );
}

export default MenuElement;
