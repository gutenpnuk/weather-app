import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MainItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 300px;
  border-bottom: 1px solid lightgray;
  margin: 0 10px 3px;
`
const Button = styled.button`
  flex-grow: 0, 9;
  background: white;
  color: #333;
  margin: 7px;
  padding: 1px 3px 2px 3px;
  border: 1px solid #333;
  border-radius: 2px;
`
const TitlePlaceholder = styled.p`
  flex-grow: 1;
  margin: 5px;

  .Link {
    text-decoration: none;
    color: #2374fc;

    :hover {
      text-decoration: underline;
      color: #1751b2;
    }
  }
`

const FavouriteItem = ({ woeid, fromFavourite, title }) => {
  return (
    <MainItem>
      <TitlePlaceholder>
        <Link className="Link" to={`/api/${woeid}`}>
          {title}
        </Link>
      </TitlePlaceholder>
      <Button onClick={() => fromFavourite(woeid)}>From favourite</Button>
    </MainItem>
  )
}

export default FavouriteItem
