import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


class Header extends Component {
  render() {
    return (
      <div >
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">User Management</Navbar.Brand>
          <Nav className="mr-auto">
          <Link to="/">
            <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link to="/users">
              <Nav.Link href="#users">Users</Nav.Link>
            </Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
