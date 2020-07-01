import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import * as data from '../Data.json'
import RecipeOfTheDay from '../Components/RecipeOfTheDay/RecipieOfTheDay';
import Recommended from '../Components/Recommended/Recommended';

class Welcome extends Component{
  render(){
    return(
      <div>
        <RecipeOfTheDay data={data}/>
        <Recommended data={data}/>
      </div>
    )
  }
}

export default Welcome