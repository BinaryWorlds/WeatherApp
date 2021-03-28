import fetch from 'cross-fetch';
import lscache from 'lscache';
import { parseForecast } from '../utils/parse';

const apiUrl = 'https://api.openweathermap.org/data/2.5/';

export const fetchApi = (city, isCelcius, mode) =>
  fetch(
    `${apiUrl + mode}?q=${city}&units=${isCelcius ? 'metric' : 'imperial'}&lang=en&APPID=${
      process.env.REACT_APP_WEATHER_API_KEY
    }`,
  );

export const checkWeather = async (city, isCelcius, isForecast = true) => {
  const keyName = `${isForecast ? 'F' : 'W'}${isCelcius ? 'C' : 'F'}${city}`;

  const saved = lscache.get(keyName);
  if (saved) return JSON.parse(saved);

  let res = await fetchApi(city, isCelcius, isForecast ? 'forecast' : 'weather');
  if (!res.ok) return null;

  res = await res.json();
  res = parseForecast(res, isCelcius);

  lscache.set(keyName, JSON.stringify(res), 60);

  return res;
};
