import React, {Component} from 'react';
import {Navbar, Form, FormControl, Nav, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Navigation.css'

class Navagation extends Component{
  render(){
    return(
      <div >
      <Navbar className='shadow rounded' expand='lg'>
        <Link to='/'><Navbar.Brand className='pr-3 mr-5 border-right'>The Foodening</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/myRecipes' className='ml-3 pr-4 border-right'>My Recipies</Nav.Link>
            <Nav.Link href='/groceryList' className='px-4 border-right'>Grocery List</Nav.Link>
            <Nav.Link href='/mealPlanning' className='px-4 border-right'>Meal Planning</Nav.Link>
            <Nav.Link href='/AccountSettings' className='px-4 border-right'>Account Settings</Nav.Link>
            <Nav.Link className='px-4'>Login/Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button className='btn-primary'>Search</Button>
    </Form>
      </Navbar>
      </div>
    )
  }
}

export default Navagation