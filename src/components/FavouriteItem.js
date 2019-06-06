import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MainItem = styled.div`
  display: -webkit-flex;
  -webkit-flex-direction: row;
  -webkit-flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 300px;
  border-bottom: 1px solid black;
  margin: 0 10px 3px;
`
const Button = styled.button`
  -webkit-flex-grow: 0, 9;
  margin: 5px;
`

const TitlePlaceholder = styled.p`
  -webkit-flex-grow: 1;
  margin: 5px;
  color: black;
`

const FavouriteItem = ({ fetchCity, woeid, fromFavourite, title }) => {
  return (
    <MainItem>
      <TitlePlaceholder>
        <Link to="/city" onClick={() => fetchCity(woeid)}>
          {title}
        </Link>
      </TitlePlaceholder>
      <Button onClick={() => fromFavourite(woeid)}>From favourite</Button>
    </MainItem>
  )
}

export default FavouriteItem
