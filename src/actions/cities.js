import { createAction } from 'redux-actions'

export const setCitiesLoading = createAction('app/SET_CITIES_LOADING')
export const setCitiesErrored = createAction('app/SET_CITIES_ERRORED')
export const setCitiesList = createAction('app/SET_CITIES_LIST')
export const fetchCities = createAction('app/FETCH_CITIES')
