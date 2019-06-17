import { createAction } from 'redux-actions'

export const setCitiesLoading = createAction('app/SET_CITIES_LOADING')
export const setCitiesErrored = createAction('app/SET_CITIES_ERRORED')
export const citiesFetchDataSuccess = createAction(
  'app/CITIES_FETCH_DATA_SUCCESS',
)
export const fetchCities = createAction('app/FETCH_CITIES')
export const addToFavourite = createAction('app/ADD_TO_FAVOURITE')
export const removeFromFavourite = createAction('app/REMOVE_FROM_FAVOURITE')
export const setFilter = createAction('app/SET_FILTER')

export const setFavouriteLoading = createAction('app/SET_FAVOURITE_LOADING')
export const setFavouriteErrored = createAction('app/SET_FAVOURITE_ERRORED')
export const getFavourites = createAction('app/GET_FAVOURITES')
