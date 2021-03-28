import { getTime, dayName } from './time';

const floor = (val, unit) => `${Math.floor(val)}${unit}`;

const getData = (elList, isCelcius) => {
  const {
    dt,
    visibility,
    main,
    weather: { 0: { icon, description } = [] } = {},
    wind: { speed, deg } = {},
    clouds: { all: clouds },
  } = elList || {};

  const { temp, temp_min: tempMin, temp_max: tempMax, feels_like: feelsLike, pressure, humidity } =
    main || {};

  return {
    dt,
    icon,
    description,
    temp: floor(temp, '°'),
    tempMin: floor(tempMin, '°'),
    tempMax: floor(tempMax, '°'),
    feelsLike: floor(feelsLike, '°'),
    pressure: floor(pressure, 'hPa'),
    humidity: floor(humidity, '%'),
    visibility: floor(visibility, 'm'),
    speed: floor(speed, isCelcius ? 'm/s' : 'mph'),
    deg: floor(deg, '°'),
    clouds: floor(clouds, '%'),
  };
};

const filterData = (list) => {
  let arr = list.filter((el) => el.dt_txt.slice(11, 13) === '12');
  if (arr.length > 5) arr = arr.slice(1, 6);
  arr = arr.map((el, index) => ({ ...getData(el), day: dayName(index) }));
  return arr;
};

const getSunText = (ms) => {
  const { hours, minutes } = getTime(ms);
  return `${hours}:${minutes}`;
};

export const parseForecast = (data, isCelcius) => {
  const { list, city } = data || {};
  const { name, timezone, sunrise, sunset } = city || {};

  return {
    name,
    timezone,
    sunrise: getSunText(sunrise),
    sunset: getSunText(sunset),
    forecast: filterData(list),
    ...getData(list[0], isCelcius),
  };
};
