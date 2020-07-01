import React, {Component} from 'react';
import {Navbar, NavDropdown, Form, FormControl, Nav, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Navagation extends Component{
  render(){
    return(
      <div>
      <Navbar bg='dark' expand='lg'>
        <Link to='/welcome'><Navbar.Brand style={{color:'white'}}>The Foodening</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link>My Recipies</Nav.Link>
            <Nav.Link>Recipie Search</Nav.Link>
            <Nav.Link>Meal Planning</Nav.Link>
            <Nav.Link>Account Settings</Nav.Link>
            <Nav.Link>Login/Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    )
  }
}

export default Navagation