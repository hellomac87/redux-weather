import axios from "axios";
const API_KEY = "90abba351bf4321006802ca770d59853";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = "FETCH_WEATHER";

export const fetchWeather = city => {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request.data
  };
};
