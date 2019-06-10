import { handleAction } from 'redux-actions'
import { cityIsLoading, cityHasErrored, cityFetchDataSuccess, fetchCity } from '../actions'
import {combineReducers} from 'redux'

const isLoading = handleAction(
  cityIsLoading,
  (state, { payload }) => {
    return payload
  },
  false,
)

const hasErrored = handleAction(
  cityHasErrored,
  (state, { payload }) => {
    return payload
  },
  false,
)

const cityToFetch = handleAction(
  fetchCity,
  (state, {payload}) => {
    return payload
  },
  ''
)

const city = handleAction(
  cityFetchDataSuccess,
  (state, { payload }) => {
    return payload
  },
  {},
)

const cityFetchData = combineReducers({
  isLoading,
  hasErrored,
  cityToFetch,
  city
})

export default cityFetchData
