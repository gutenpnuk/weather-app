import { handleAction } from 'redux-actions'

import { cityIsLoading, cityHasErrored, cityFetchDataSuccess, fetchCity } from '../actions'

export const isCityLoading = handleAction(
  cityIsLoading,
  (state, { payload }) => {
    return payload
  },
  false,
)

export const hasCityErrored = handleAction(
  cityHasErrored,
  (state, { payload }) => {
    return payload
  },
  false,
)

export const cityToFetch = handleAction(
  fetchCity,
  (state, {payload}) => {
    return payload
  },
  ''
)

export const city = handleAction(
  cityFetchDataSuccess,
  (state, { payload }) => {
    return payload
  },
  {},
)
