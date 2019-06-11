import { createAction } from 'redux-actions'

export const weatherIsLoading = createAction('app/WEATHER_IS_LOADING')
export const weatherHasErrored = createAction('app/WEATHER_HAS_ERRORED')
export const weatherFetchDataSuccess = createAction(
  'app/WEATHER_FETCH_DATA_SUCCESS',
)
export const fetchWeather = createAction('app/FETCH_WEATHER')
