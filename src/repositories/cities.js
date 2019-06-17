import * as R from 'ramda'

export const getFavourite = () =>
  JSON.parse(localStorage.getItem('favouriteItems') || '[]')

export const setFavourite = citiesList =>
  (localStorage.favouriteItems = JSON.stringify(citiesList))

export const addToLocalFavourite = payload => {
  const prevFavoutire = getFavourite()
  const nextFavourite = [...prevFavoutire, payload]
  setFavourite(nextFavourite)
}

export const removeFromLocalFavourite = payload => {
  const prevFavoutire = getFavourite()
  const nextFavourite = R.filter(item => {
    return item.woeid !== payload
  }, prevFavoutire)
  setFavourite(nextFavourite)
}
