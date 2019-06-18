import { handleAction } from 'redux-actions'
import {
  setWeatherLoading,
  setWeatherErrored,
  setWeatherData,
  fetchWeather,
} from '../actions'
import { combineReducers } from 'redux'
import * as R from 'ramda'

const isLoading = handleAction(
  setWeatherLoading,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  false,
)

const hasErrored = handleAction(
  setWeatherErrored,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  false,
)

const query = handleAction(
  fetchWeather,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  '',
)

const weatherData = handleAction(
  setWeatherData,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  {},
)

const weather = combineReducers({
  isLoading,
  hasErrored,
  query,
  weatherData,
})

export default weather
