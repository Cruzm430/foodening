import React, {Component} from 'react';
import {Card, Button, Form, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';
import * as data from '../Data.json'

class MyRecipes extends Component{
  render(){
    const recipes = data.default.results
    return(
      <div className='album py-3'>
        <div className='container'>
          <h3 className='text-center pb-3 display-4'>Your Saved Recipies</h3>
          <div className='d-flex justify-content-end'>
          <Form inline className='mb-3'>
            <FormControl type="text" placeholder="Search your Recipies" className='mr-1' />
              <Button variant="outline-primary">Search</Button>
            </Form>
          <DropdownButton id="dropdown-basic-button" className='pl-2' title="Filter">
            <Dropdown.Item>Cook Time</Dropdown.Item>
            <Dropdown.Item>Price</Dropdown.Item>
            <Dropdown.Item>Ingredients</Dropdown.Item>
          </DropdownButton>
          </div>
          <div className='row'>
            {
              recipes.map(recipe=>
                <div className='col-md-4 pb-4' key={recipe.id}>
                  <Card className='shadow text-center bg-lightmb-4 shadow-sm h-100'>
                    <Card.Img className='bd-placeholder-img card-img-top' style={{width:'100%', height:'15vw', objectFit:'cover'}}src={`https://spoonacular.com/recipeImages/${recipe.image}`}/>
                    <Card.Body className='d-flex flex-column'>
                    <Card.Text>{recipe.title}</Card.Text>
                    <Card.Text className='text-muted mt-auto mx-auto'>Ready in <span className='font-weight-bold'>{recipe.readyInMinutes}</span> minutes</Card.Text>
                    <Button className='mt-auto bg-primary w-50 mx-auto'>Make it!</Button>
                    </Card.Body>
                  </Card>
                </div>)
            }
          </div>
        </div>
      </div>
    )
  }
}

export default MyRecipes