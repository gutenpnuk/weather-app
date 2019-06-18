import * as R from 'ramda'
import { getFavouritesById } from './favourites'

const getCities = R.prop('cities')

export const getIsCitiesLoading = R.pipe(
  getCities,
  R.prop('isLoading'),
)

export const getHasCitiesErrored = R.pipe(
  getCities,
  R.prop('hasErrored'),
)

export const getAllCities = R.pipe(
  getCities,
  R.prop('all'),
)

export const getCitiesQuery = R.pipe(
  getCities,
  R.prop('query'),
)

export const getCitiesFromFavourite = R.converge(
  (favouritesById, all) =>
    R.map(item => R.assoc('isDisabled', !!favouritesById[item.woeid], item))(
      all,
    ),
  [getFavouritesById, getAllCities],
)
