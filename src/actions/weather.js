import { createAction } from 'redux-actions'

export const setWeatherLoading = createAction('app/SET_WEATHER_LOADING')
export const setWeatherErrored = createAction('app/SET_WEATHER_ERRORED')
export const weatherFetchDataSuccess = createAction(
  'app/WEATHER_FETCH_DATA_SUCCESS',
)
export const fetchWeather = createAction('app/FETCH_WEATHER')
