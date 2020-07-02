import React from 'react';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Components/Navigation/Navigation';
import Welcome from './Pages/Welcome';
import MyRecipes from './Pages/MyRecipes';
import GroceryList from './Pages/GroceryList';
import MealPlanning from './Pages/MealPlanning';

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Route exact path='/'> <Welcome/> </Route>
      <Route path='/myRecipes'> <MyRecipes/> </Route>
      <Route path='/groceryList'> <GroceryList/> </Route>
      <Route path='/mealPlanning'> <MealPlanning/> </Route>
    </BrowserRouter>
  );
}

export default App;
