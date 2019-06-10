import { getFavouriteItems } from './favourite'

export const getIsLoading = state => state.itemsFetchData.isLoading

export const getHasErrored = state => state.itemsFetchData.hasErrored

export const getItems = state => state.itemsFetchData.items

export const getQuery = state => state.itemsFetchData.query

export const getItemsFromFavourite = state => {
  const favs = getFavouriteItems(state)
  const items = getItems(state)

  return items.map(item => {
    return {
      ...item,
      isDisabled: favs.some(favitem => {
        return favitem.woeid === item.woeid
      }),
    }
  })
}
