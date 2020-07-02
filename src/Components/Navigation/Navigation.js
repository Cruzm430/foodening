import React, {Component} from 'react';
import {Navbar, NavDropdown, Form, FormControl, Nav, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Navagation extends Component{
  render(){
    return(
      <div >
      <Navbar className='shadow-lg rounded' expand='lg' style={{backgroundColor:'#ECF2F2'}}>
        <Link to='/welcome'><Navbar.Brand className='pr-3 mr-5 border-right'>The Foodening</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link className='ml-5 border-right '>My Recipies</Nav.Link>
            <Nav.Link className='px-4 border-right '>Recipie Search</Nav.Link>
            <Nav.Link className='px-4 border-right '>Meal Planning</Nav.Link>
            <Nav.Link className='px-4 border-right '>Account Settings</Nav.Link>
            <Nav.Link className=''>Login/Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2 " />
      <Button className='btn-primary'>Search</Button>
    </Form>
      </Navbar>
      </div>
    )
  }
}

export default Navagation