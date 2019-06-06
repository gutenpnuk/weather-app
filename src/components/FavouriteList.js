import React from 'react'
import FavouriteItem from './FavouriteItem'
import styled from 'styled-components'

const Main = styled.div`
  display: -webkit-flex;
  -webkit-flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
`

const NameForm = styled.input`
  margin: 20px;
  width: 200px;
`

const FavouriteList = ({ setFilter, items, fromFavourite, fetchCity }) => {
  return (
    <Main>
      <NameForm
        type="text"
        onChange={({ target: { value } }) => {
          setFilter(value)
        }}
      />

      {items.map(item => (
        <FavouriteItem
          key={item.woeid}
          {...item}
          fromFavourite={fromFavourite}
          fetchCity={fetchCity}
        />
      ))}
    </Main>
  )
}

export default FavouriteList
