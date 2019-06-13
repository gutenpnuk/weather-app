import * as R from 'ramda'

const getCities = R.prop('cities')

const getActiveFilter = R.pipe(
  getCities,
  R.prop('activeFilter'),
  R.toLower,
)

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

export const getFavourites = R.pipe(
  getCities,
  R.prop('favourites'),
)

export const getFavouritesById = R.pipe(
  getFavourites,
  R.indexBy(R.prop('woeid')),
)

export const getFavouriteIsLoading = R.pipe(
  getCities,
  R.prop('isFavouriteLoading'),
)

export const getFavouriteHasErrored = R.pipe(
  getCities,
  R.prop('hasFavouriteErrored'),
)

export const getFilteredFavourites = R.converge(
  (activeFilter, favourites) =>
    R.filter(
      R.pipe(
        R.prop('title'),
        R.toLower,
        R.includes(activeFilter),
      ),
    )(favourites),
  [getActiveFilter, getFavourites],
)

export const getCitiesFromFavourite = R.converge(
  (favouritesById, all) =>
    R.map(item => R.assoc('isDisabled', !!favouritesById[item.woeid], item))(
      all,
    ),
  [getFavouritesById, getAllCities],
)
