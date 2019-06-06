import { createAction } from 'redux-actions'

export const cityIsLoading = createAction('app/CITY_IS_LOADING')
export const cityHasErrored = createAction('app/CITY_HAS_ERRORED')
export const cityFetchDataSuccess = createAction(
  'app/CITY_FETCH_DATA_SUCCESS',
)
export const fetchCity = createAction('app/FETCH_CITY')