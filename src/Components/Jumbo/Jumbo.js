import React from 'react';
import './Jumbo.css';
import {Jumbotron, Button} from 'react-bootstrap';

const Jumbo = () =>{
  return(
    <Jumbotron className='text-center'>
     <h1 className='display-4 pt-4'>Welcome to The Foodening</h1>
     <p>stuff about foodening</p>
     <Button className='mt-5 bg-primary'> Sign Up!</Button>
    </Jumbotron>
  )
}

export default Jumbo