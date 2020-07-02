import React from 'react';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Welcome from './Pages/Welcome'
import Navigation from './Components/Navigation/Navigation'

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Welcome/>
    </BrowserRouter>
   
  );
}

export default App;
