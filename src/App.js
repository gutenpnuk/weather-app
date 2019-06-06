import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './configureStore'
import { CitiesList, FavouriteList, City } from './containers'
import { Header } from './components'
import { fetchCity } from './actions'
import styled from 'styled-components'

const MainFlex = styled.div`
  display: -webkit-flex;
  -webkit-flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
  width: 50%;
  background-color: WhiteSmoke;
`

function App() {
  store.dispatch(fetchCity(44418))
  return (
    <MainFlex>
      <Provider store={store}>
        <>
          <Router>
            <Header />
            <Route path="/" exact component={CitiesList} />
            <Route path="/favourite" component={FavouriteList} />
            <Route path="/city" component={City} />
          </Router>
        </>
      </Provider>
    </MainFlex>
  )
}

export default App
