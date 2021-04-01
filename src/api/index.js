import fetch from 'cross-fetch';
import lscache from 'lscache';
import { parseForecast } from '../utils/parse';

const apiUrl = 'https://api.openweathermap.org/data/2.5/';

export const fetchApi = (location, isCelcius, isForecast, searchByCoords = false) => {
  const mode = isForecast ? 'forecast' : 'weather';
  const query = searchByCoords
    ? `?lat=${location.latitude}&lon=${location.longitude}`
    : `?q=${location}`;
  const units = `&units=${isCelcius ? 'metric' : 'imperial'}`;
  const lang = `&lang=en`;
  const id = `&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`;

  return fetch(apiUrl + mode + query + units + lang + id);
};

const getKeyWeather = (city, isCelcius, isForecast) =>
  `${isForecast ? 'f' : 'w'}${isCelcius ? 'c' : 'f'}${city}`.toLowerCase();

export const checkWeather = async (city, isCelcius, isForecast = true) => {
  const keyWeather = getKeyWeather(city, isCelcius, isForecast);

  const saved = lscache.get(keyWeather);
  if (saved) return saved;

  let res = await fetchApi(city, isCelcius, isForecast);
  if (!res.ok) return null;

  res = await res.json();
  res = parseForecast(res, isCelcius);

  lscache.set(keyWeather, res, 60);

  return res;
};

export const checkWeatherByCoords = async (latitude, longitude, isCelcius, isForecast = true) => {
  const keyCoords = `lat${latitude}long${longitude}`;

  const saved = lscache.get(keyCoords);
  if (saved) return checkWeather(saved, isCelcius, isForecast);

  let res = await fetchApi({ latitude, longitude }, isCelcius, isForecast, true);
  if (!res.ok) return null;

  res = await res.json();
  res = parseForecast(res, isCelcius);

  const { name } = res;
  const keyName = getKeyWeather(name, isCelcius, isForecast);

  lscache.set(keyName, res, 60);
  lscache.set(keyCoords, name, 10080);

  return res;
};
