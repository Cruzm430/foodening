import React, {Component} from 'react';
import * as data from '../Data.json';

class MealPlanning extends Component{
  render(){
    const meals = data.default.meals;
    console.log(meals)
    return(
      <div>
        Meal Planning
      </div>
    )
  }
}

export default MealPlanning