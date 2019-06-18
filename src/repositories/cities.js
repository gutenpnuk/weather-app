import * as R from 'ramda'

export const getFavourite = () =>
  JSON.parse(localStorage.getItem('favouriteItems') || '[]')

export const setFavourite = citiesList =>
  (localStorage.favouriteItems = JSON.stringify(citiesList))

export const addToLocalFavourite = city => {
  const favouriteList = getFavourite()
  const updatedFavouriteList = [...favouriteList, city]
  setFavourite(updatedFavouriteList)
}

export const removeFromLocalFavourite = id => {
  const favouriteList = getFavourite()
  const updatedFavouriteList = R.reject(
    R.pipe(
      R.prop('woeid'),
      R.equals(id),
    ),
    favouriteList,
  )
  setFavourite(updatedFavouriteList)
}
