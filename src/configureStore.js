import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import { watchFetchData, watchFetchCity } from './sagas'

import { getFavourite, setFavourite } from './repositories'
import { addToFavourite, removeFromFavourite } from './actions'

const favouriteItems = getFavourite()

const localStorageFavourite = store => next => action => {
  let res = next(action)
  const { favouriteItems } = store.getState()
  switch (action.type) {
    case addToFavourite.toString():
      return setFavourite(favouriteItems)
    case removeFromFavourite.toString():
      return setFavourite(favouriteItems)
    default:
      return res
  }
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  { favouriteItems },
  applyMiddleware(localStorageFavourite, sagaMiddleware),
)

sagaMiddleware.run(watchFetchData)
sagaMiddleware.run(watchFetchCity)

export default store
