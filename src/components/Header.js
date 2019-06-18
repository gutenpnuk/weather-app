import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #999;
  border-radius: 3px;
`
const LinkContainer = styled(Link)`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  :hover {
    background-color: #111;
  }
`

const ListItem = styled.li`
  float: left;
`

const Header = () => {
  return (
    <List>
      <ListItem>
        <LinkContainer to="/">Home</LinkContainer>
      </ListItem>
      <ListItem>
        <LinkContainer to="/favourite">Favourite</LinkContainer>
      </ListItem>
    </List>
  )
}

export default Header
