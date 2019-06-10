import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/root'

import { getFavourite, setFavourite } from './repositories'
import { addToFavourite, removeFromFavourite } from './actions'

import { composeWithDevTools } from 'redux-devtools-extension'

const favouriteItems = getFavourite()

const localStorageFavourite = store => next => action => {
  let res = next(action)
  const {
    favourite: { favouriteItems },
  } = store.getState()
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
  { favourite: { favouriteItems } },
  composeWithDevTools(applyMiddleware(localStorageFavourite, sagaMiddleware)),
)

sagaMiddleware.run(rootSaga)

export default store
