import { createAction } from 'redux-actions'

export const citiesIsLoading = createAction('app/CITIES_IS_LOADING')
export const citiesHasErrored = createAction('app/CITIES_HAS_ERRORED')
export const citiesFetchDataSuccess = createAction(
  'app/CITIES_FETCH_DATA_SUCCESS',
)
export const fetchCities = createAction('app/FETCH_CITIES')
export const addToFavourite = createAction('app/ADD_TO_FAVOURITE')
export const removeFromFavourite = createAction('app/REMOVE_FROM_FAVOURITE')
export const setFilter = createAction('app/SET_FILTER')

export const favouriteIsLoading = createAction('app/FAVOURITE_IS_LOADING')
export const favouriteHasErrored = createAction('app/FAVOURITE_HAS_ERRORED')
export const getFavourites = createAction('app/GET_FAVOURITES')
