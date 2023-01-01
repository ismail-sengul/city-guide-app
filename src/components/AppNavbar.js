import React from 'react';
import {Navbar,Nav,Container, Button} from 'react-bootstrap';
import { notImplementedYet } from '../App';

export const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='border-bottom mb-3'>
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand href="/">City Guide</Navbar.Brand>
          <Nav className="mx-auto">
          <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link onClick={notImplementedYet}>Attractions</Nav.Link>
            <Nav.Link onClick={notImplementedYet}>Events</Nav.Link>
            <Nav.Link onClick={notImplementedYet}>Restaurants</Nav.Link>
            <Nav.Link onClick={notImplementedYet}>Accommodation</Nav.Link>
            <Nav.Link onClick={notImplementedYet}>News</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          <Button variant="outline-primary mx-2" onClick={notImplementedYet}>Sign In</Button>
          <Button variant="outline-primary" onClick={notImplementedYet}>Sign Up</Button>
        </Container>

      </Navbar>
  )
}
