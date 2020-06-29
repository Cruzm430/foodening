import React from 'react';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom';
import Main from './Pages/Main';
import Welcome from './Pages/Welcome';
import Register from './Pages/Register';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <Route exact path='/'>
      <Welcome/>
    </Route>
    <Route path='/register'>
      <Register/>
    </Route>
    <Route path='/main'>
      <Main/>
    </Route>
    </BrowserRouter>
  );
}

export default App;
