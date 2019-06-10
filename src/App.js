import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './configureStore'
import { CitiesList, FavouriteList, City } from './containers'
import { Header } from './components'
import styled from 'styled-components'

const MainFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`

function App() {
  return (
    <MainFlex>
      <Provider store={store}>
        <>
          <Router>
            <Header />
            <Route path="/" exact component={CitiesList} />
            <Route path="/favourite" component={FavouriteList} />
            <Route path="/api/:id" component={City} />
          </Router>
        </>
      </Provider>
    </MainFlex>
  )
}

export default App
