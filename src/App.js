import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './configureStore'
import { CitiesList, FavouriteList, City } from './containers'
import { Header } from './components'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin: 0 auto;
`

const App = () => {
  return (
    <MainContainer>
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
    </MainContainer>
  )
}

export default App
