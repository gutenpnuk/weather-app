import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/root'

import { setFavourite } from './repositories'
import { addToFavourite, removeFromFavourite } from './actions'

import { composeWithDevTools } from 'redux-devtools-extension'

const localStorageFavourite = store => next => action => {
  let res = next(action)
  const {
    cities: { favouriteCitiesList },
  } = store.getState()
  switch (action.type) {
    case addToFavourite.toString():
      return setFavourite(favouriteCitiesList)
    case removeFromFavourite.toString():
      return setFavourite(favouriteCitiesList)
    default:
      return res
  }
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(localStorageFavourite, sagaMiddleware)),
)

sagaMiddleware.run(rootSaga)

export default store
