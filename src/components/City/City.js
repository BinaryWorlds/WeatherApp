import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { checkWeather } from '../../api';
import { getIcon } from '../../utils/icon';
import ButtonMore from '../ButtonMore/ButtonMore';

import * as S from './City.style';

function City() {
  const [weather, setWeather] = useState();
  const {
    menu: { city: cityName, isCelcius },
  } = useSelector((state) => state);

  useEffect(async () => {
    if (!cityName) return;
    const data = await checkWeather(cityName, isCelcius);

    const details = [
      ['Precipitation', data.pop],
      ['Feels like', data.feelsLike],
      ['Wind', data.speed],
      ['Direction', data.deg],
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
        <S.ImageMain id="mainIcon" alt={weather.description} src={getIcon(weather.icon, true)} />
        <S.SectionV>{weather.description}</S.SectionV>
        <S.Section id="temp">
          <p id="bold">&#11015;{weather.tempMin}</p>
          <p>{weather.temp}</p>
          <p id="bold">&#11014;{weather.tempMax}</p>
        </S.Section>
        <S.Section>
          <S.Cell id="sun">
            <p>Sunrise</p>
            <p id="bold">{weather.sunrise}</p>
          </S.Cell>
          <S.Cell id="sun">
            <p> Sunset</p>
            <p id="bold">{weather.sunset}</p>
          </S.Cell>
        </S.Section>
        <ButtonMore />
      </S.Wrapper>
      <S.Details>
        <S.Section id="nextSection">
          {weather.forecast.map((el) => (
            <S.Cell id="nextCell" key={el.dt}>
              <p id="bold">{el.day}</p>
              <S.Image id="iconF" src={getIcon(el.icon)} />
              <p>{el.temp}</p>
            </S.Cell>
          ))}
        </S.Section>
        <S.SectionV>
          {weather.details.map((el, index, arr) => {
            if (index % 2 !== 0) return null;
            const next = arr[index + 1] || [];
            return (
              <S.Section id="detailsSection" key={el[0]}>
                <S.Cell id="detailsLeft">
                  <p>{el[0]}</p>
                  <p>{el[1]} </p>
                </S.Cell>
                <S.Cell id="detailsRight">
                  <p>{next[0]}</p>
                  <p>{next[1]}</p>
                </S.Cell>
              </S.Section>
            );
          })}
        </S.SectionV>
      </S.Details>
    </>
  ) : null;
}

export default City;
