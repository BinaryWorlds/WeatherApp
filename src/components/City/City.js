import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { checkWeather } from '../../api';
import { getIcon } from '../../utils/icon';
import { lockScroll, unlockScroll } from '../../utils/scroll';

import * as S from './City.style';

function City() {
  const [isOpen, setIsOpen] = useState(false);
  const [weather, setWeather] = useState();

  const {
    menu: { city: cityName, isCelcius },
  } = useSelector((state) => state);

  const handleClick = () => setIsOpen(!isOpen);

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

  useEffect(() => {
    if (isOpen) unlockScroll();
    else lockScroll();
    return () => unlockScroll();
  }, [isOpen]);

  return weather ? (
    <>
      <S.More alt="details" handleClick={handleClick} isOpen={isOpen} />
      <S.Wrapper isOpen={isOpen}>
        <S.Main>
          <S.SectionV className="description">{weather.description}</S.SectionV>
          <S.ImageMain
            className="mainIcon"
            alt={weather.description}
            src={getIcon(weather.icon, true)}
          />
          <S.Section className="temp">
            <p>&#11015;{weather.tempMin}</p>
            <p>{weather.temp}</p>
            <p>&#11014;{weather.tempMax}</p>
          </S.Section>
          <S.Section>
            <S.Cell className="sun">
              <p>Sunrise</p>
              <p>{weather.sunrise}</p>
            </S.Cell>
            <S.Cell className="sun">
              <p> Sunset</p>
              <p>{weather.sunset}</p>
            </S.Cell>
          </S.Section>
        </S.Main>
        <S.Details>
          <S.Section className="nextSection">
            {weather.forecast.map((el) => (
              <S.Cell className="nextCell" key={el.dt}>
                <p>{el.day}</p>
                <S.Image alt={el.day} src={getIcon(el.icon)} />
                <p>{el.temp}</p>
              </S.Cell>
            ))}
          </S.Section>
          <S.SectionV className="details">
            {weather.details.map((el, index, arr) => {
              if (index % 2 !== 0) return null;
              const next = arr[index + 1] || [];
              return (
                <S.Section className="detailsSection" key={el[0]}>
                  <S.Cell className="detailsLeft">
                    <p>{el[0]}</p>
                    <p>{el[1]} </p>
                  </S.Cell>
                  <S.Cell className="detailsRight">
                    <p>{next[0]}</p>
                    <p>{next[1]}</p>
                  </S.Cell>
                </S.Section>
              );
            })}
          </S.SectionV>
        </S.Details>
      </S.Wrapper>
    </>
  ) : null;
}

export default City;
