import * as R from 'ramda'

export const getIsCitiesLoading = state => state.cities.isLoading

export const getHasCitiesErrored = state => state.cities.hasErrored

export const getCitiesList = state => state.cities.citiesList

export const getCitiesQuery = state => state.cities.query

export const getFavouriteItems = state => state.cities.favouriteCitiesList

export const getFavouriteIsLoading = state => state.cities.isFavouriteLoading

export const getFavouriteHasErrored = state => state.cities.hasFavouriteErrored

const getActiveFilter = state => state.cities.activeFilter.toLowerCase()

export const getFilteredFavourites = state => {
  const isMatched = ({ title }) => {
    return title.toLowerCase().includes(getActiveFilter(state))
  }
  return R.filter(isMatched, getFavouriteItems(state))
}

export const getCitiesFromFavourite = state => {
  const favs = getFavouriteItems(state)
  const items = getCitiesList(state)

  const isFavourite = item => {
    const isEqual = favitem => {
      return R.equals(favitem.woeid, item.woeid)
    }

    return R.assoc('isDisabled', favs.some(isEqual), item)
  }

  return R.map(isFavourite, items)
}
