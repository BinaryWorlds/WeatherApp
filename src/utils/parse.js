import { getTime, dayName } from './time';

const floor = (val, unit) => `${Math.floor(val)}${unit}`;

const degToDirection = (deg) => {
  if (deg < 0 || deg > 360) return 'N/A';
  if (deg <= 11.25) return 'N';
  const directions = [
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW',
    'N',
  ];
  const dir = Math.floor((deg - 11.25) / 22.5);
  return directions[dir];
};

const getData = (elList, isCelcius) => {
  const {
    dt,
    visibility,
    pop,
    main,
    weather: { 0: { icon, description } = [] } = {},
    wind: { speed, deg } = {},
    clouds: { all: clouds },
    sys: { pod } = {},
  } = elList || {};

  const { temp, feels_like: feelsLike, pressure, humidity } = main || {};

  return {
    dt,
    icon,
    description,
    temp: floor(temp, '°'),
    feelsLike: floor(feelsLike, '°'),
    pressure: floor(pressure, ' hPa'),
    humidity: floor(humidity, ' %'),
    visibility: floor(visibility, ' m'),
    speed: floor(speed, isCelcius ? ' m/s' : ' mph'),
    deg: degToDirection(deg),
    clouds: floor(clouds, ' %'),
    pop: floor(pop, ' %'),
    isNight: pod === 'n',
  };
};

const filterData = (list) => {
  let arr = list.filter((el) => el.dt_txt.slice(11, 13) === '12');
  if (arr.length > 4) arr = arr.slice(1, 5);
  arr = arr.map((el, index) => ({ ...getData(el), day: dayName(index) }));
  return arr;
};

const getSunText = (ms, timezone) => {
  const { hours, minutes } = getTime(ms, timezone);
  return `${hours}:${minutes}`;
};

export const getTemp = (elList) => {
  const { dt, main: { temp } = {} } = elList || {};
  return { dt, temp };
};

export const getMinMax = (list) => {
  const { dt } = getTemp(list[0]);
  const { day: startDay } = getTime(dt);
  const { length } = list;
  let temporaryTemp;
  let temporaryDay;
  const tempList = [];

  for (let i = 0; i < length; i++) {
    temporaryTemp = getTemp(list[i]);
    temporaryDay = getTime(temporaryTemp.dt);
    if (temporaryDay.day !== startDay) break;
    tempList[i] = temporaryTemp.temp;
  }

  const tempMin = Math.min(...tempList);
  const tempMax = Math.max(...tempList);

  return { tempMin: floor(tempMin, '°'), tempMax: floor(tempMax, '°') };
};

export const parseForecast = (data, isCelcius) => {
  const { list, city } = data || {};
  const { name, timezone, sunrise, sunset } = city || {};

  return {
    name,
    timezone,
    sunrise: getSunText(sunrise, timezone),
    sunset: getSunText(sunset, timezone),
    forecast: filterData(list),
    ...getMinMax(list),
    ...getData(list[0], isCelcius),
  };
};
