import * as R from 'ramda'

export const getFavouriteItems = state => state.favourite.favouriteItems

const getActiveFilter = state => state.favourite.activeFilter.toLowerCase()

export const getFilteredFavourites = state => {
  const isMatched = ({ title }) => {
    return title.toLowerCase().includes(getActiveFilter(state))
  }
  return R.filter(isMatched, getFavouriteItems(state))
}
