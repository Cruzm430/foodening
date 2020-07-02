import React from 'react';
import './RecipeOfTheDay.css';
import {Card,Button} from 'react-bootstrap';

const RecipeOfTheDay = (data) =>{
  const recipeOfTheDay = data.data.default.results[9]
  console.log(recipeOfTheDay)
  return(
    <Card>
      <Card.Header>Here's Recipie Of The Day</Card.Header>
      <Card.Body>
      <Card.Title>{recipeOfTheDay.title}</Card.Title>
      <Card.Text>Ready in {recipeOfTheDay.readyInMinutes} minutes!</Card.Text>
        <Button variant='primary'>Take me there!</Button>
      </Card.Body>
    </Card>
  )
}

export default RecipeOfTheDay