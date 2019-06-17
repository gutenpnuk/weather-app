import * as R from 'ramda'

const getWeather = R.prop('weather')
const initConsolidatedWeather = () => []

export const getIsWeatherLoading = R.pipe(
  getWeather,
  R.prop('isLoading'),
)

export const getHasWeatherErrored = R.pipe(
  getWeather,
  R.prop('hasErrored'),
)

export const getWeatherData = R.pipe(
  getWeather,
  R.prop('weatherData'),
)

export const getWeatherQuery = R.pipe(
  getWeather,
  R.prop('query'),
)

export const getConsolidatedWeather = R.pipe(
  getWeatherData,
  R.prop('consolidatedWeather'),
  R.when(R.isNil, initConsolidatedWeather),
)
