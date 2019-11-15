import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import ReactRouterBootstrap, { LinkContainer } from 'react-router-bootstrap'

const Header = () => (
  <>
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <LinkContainer exact to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/list">
          <Nav.Link>List</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/create">
          <Nav.Link>Create</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  </>
)

export default Header
