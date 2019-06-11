import { handleAction } from 'redux-actions'
import {
  weatherIsLoading,
  weatherHasErrored,
  weatherFetchDataSuccess,
  fetchWeather,
} from '../actions'
import { combineReducers } from 'redux'

const isLoading = handleAction(
  weatherIsLoading,
  (state, { payload }) => {
    return payload
  },
  false,
)

const hasErrored = handleAction(
  weatherHasErrored,
  (state, { payload }) => {
    return payload
  },
  false,
)

const query = handleAction(
  fetchWeather,
  (state, { payload }) => {
    return payload
  },
  '',
)

const weatherData = handleAction(
  weatherFetchDataSuccess,
  (state, { payload }) => {
    return payload
  },
  {},
)

const weather = combineReducers({
  isLoading,
  hasErrored,
  query,
  weatherData,
})

export default weather
