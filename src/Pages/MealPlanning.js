import React, {Component} from 'react';
import * as data from '../Data.json';
import { Card, Button } from 'react-bootstrap';

class MealPlanning extends Component{
  render(){
    const meals = data.default.meals;
    console.log(meals)
    return(
      <div className='album py-3'>
        <div className='container'>
          <h3 className='text-center pb-4 display 4'> Your recommended meals</h3>
          <div className='row'>
            {
              meals.map(meal=>
                <div className='col-md-4 pb-4' key={meal.id}>
                  <Card className='shadow text-center bg-light mb-4 shadow-sm h-100'>
                    <Card.Img className='card-img-top' style={{width:'100%', height:'15vw', objectFit:'cover'}} src={`https://spoonacular.com/recipeImages/${meal.image}`}/>
                    <Card.Body className='d-flex flex-column'>
                      <Card.Text>{meal.title}</Card.Text>
                      <Card.Text className='text-muted mt-auto mx-auto'>Ready in <span className='font-weight-bold'>{meal.readyInMinutes}</span> minutes</Card.Text>
                      <Button className='mt-auto bg-primary w-50 mx-auto'>Make It!</Button>
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

export default MealPlanning