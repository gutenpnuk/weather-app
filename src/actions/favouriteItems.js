import { createAction } from 'redux-actions'

export const addToFavourite = createAction('app/ADD_TO_FAVOURITE')
export const removeFromFavourite = createAction('app/REMOVE_FROM_FAVOURITE')
export const setFilter = createAction('app/SET_FILTER')
