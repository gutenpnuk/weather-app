import * as R from 'ramda'

export const getFavourites = R.prop('favourites')

export const getAllFafourites = R.pipe(
  getFavourites,
  R.prop('all')
)

const getActiveFilter = R.pipe(
  getFavourites,
  R.prop('activeFilter'),
  R.toLower,
)

export const getFavouritesById = R.pipe(
  getAllFafourites,
  R.indexBy(R.prop('woeid')),
)

export const getFavouriteIsLoading = R.pipe(
  getFavourites,
  R.prop('isFavouriteLoading'),
)

export const getFavouriteHasErrored = R.pipe(
  getFavourites,
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
  [getActiveFilter, getAllFafourites],
)
