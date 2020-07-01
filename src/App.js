import React from 'react';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Welcome from './Pages/Welcome'
import Navagation from './Components/Navagation/Navagation'

function App() {
  return (
    <BrowserRouter>
    <Navagation/>
    <Welcome/>
    </BrowserRouter>
  );
}

export default App;
