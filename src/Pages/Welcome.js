import React, {Component} from 'react';

import * as data from '../Data.json'
import RecipeOfTheDay from '../Components/RecipeOfTheDay/RecipieOfTheDay';
import Popular from '../Components/Popular/Popular';

class Welcome extends Component{
  render(){
    return(
      <div>
        <p>Welcome to the Foodening</p>
        <RecipeOfTheDay data={data}/>
        <Popular data={data}/>
      </div>
    )
  }
}

export default Welcome