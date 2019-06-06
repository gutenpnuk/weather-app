export const getFavourite = () =>
  JSON.parse(localStorage.getItem('favouriteItems') || '[]')

export const setFavourite = citiesList => {
  localStorage.favouriteItems = JSON.stringify(citiesList)
}
