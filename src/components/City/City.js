import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { checkWeather } from '../../api';
import { getIcon } from '../../utils/icon';

import * as S from './City.style';
import * as R from './rangeSlider';

function City() {
  const [weather, setWeather] = useState();
  const {
    menu: { city: cityName, isCelcius },
  } = useSelector((state) => state);

  useEffect(async () => {
    if (!cityName) return;
    const data = await checkWeather(cityName, isCelcius);

    const details = [
      ['Description', data.description],
      ['Feels like', data.feelsLike],
      ['Wind', data.speed],
      ['Dew Point', data.deg],
      ['Clouds', data.clouds],
      ['Visibility', data.visibility],
      ['Pressure', data.pressure],
      ['Humidity', data.humidity],
    ];

    setWeather({ ...data, details });
  }, [isCelcius, cityName]);

  return weather ? (
    <>
      <S.Wrapper>
        <S.Image src={getIcon(weather.icon, true)} />
        <S.Section id="temp">
          <p>🠗{weather.tempMin}</p>
          <p>{weather.temp}</p>
          <p>🠕{weather.tempMax}</p>
        </S.Section>
        <S.RangeWrapper>
          <R.Output />
          <R.Input type="range" />
        </S.RangeWrapper>
        <S.Section>
          <S.Cell>
            <p>Sunrise</p>
            <p>{weather.sunrise}</p>
          </S.Cell>
          <S.Cell>
            <p> Sunset</p>
            <p>{weather.sunset}</p>
          </S.Cell>
        </S.Section>
        <S.More>
          <p>More</p>
        </S.More>
      </S.Wrapper>
      <S.Details>
        <S.Section id="nextSection">
          {weather.forecast.map((el) => (
            <S.Cell id="nextCell" key={el.dt}>
              <p>{el.day}</p>
              <S.Image src={getIcon(el.icon)} />
              <p>{el.temp}</p>
            </S.Cell>
          ))}
        </S.Section>
        {weather.details.map((el, index, arr) => {
          if (index % 2 !== 0) return null;
          const next = arr[index + 1] || [];
          return (
            <S.Section key={el[0]}>
              <S.Cell>
                <p>{el[0]}</p>
                <p>{el[1]} </p>
              </S.Cell>
              <S.Cell>
                <p>{next[0]}</p>
                <p>{next[1]}</p>
              </S.Cell>
            </S.Section>
          );
        })}
      </S.Details>
    </>
  ) : null;
}

export default City;
