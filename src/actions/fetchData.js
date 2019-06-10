import { createAction } from 'redux-actions'

export const itemsIsLoading = createAction('app/ITEMS_IS_LOADING')
export const itemsHasErrored = createAction('app/ITEMS_HAS_ERRORED')
export const itemsFetchDataSuccess = createAction(
  'app/ITEMS_FETCH_DATA_SUCCESS',
)
export const fetchData = createAction('app/FETCH_DATA')
