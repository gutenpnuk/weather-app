import { createAction } from 'redux-actions'

export const itemsIsLoading = createAction('app/ITEMS_IS_LOADING')
export const itemsHasErrored = createAction('app/ITEMS_HAS_ERRORED')
export const itemsFetchDataSuccess = createAction(
  'app/ITEMS_FETCH_DATA_SUCCESS',
)
export const fetchData = createAction('app/FETCH_DATA')
export const addToFavourite = createAction('app/ADD_TO_FAVOURITE')
export const removeFromFavourite = createAction('app/REMOVE_FROM_FAVOURITE')
export const setFilter = createAction('app/SET_FILTER')
