import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component{
  render(){
    return(
      <div className='navbar navbar-expand-sm bg-dark navbar-dark fixed-top'>
        <div className='container'>
          <Link to='#' className='navbar-brand'>Foodening</Link>
          <button className='navbar-toggler' data-toggle="collapse" data-target='#navbarCollapse'>
            <span className='navbar-toggle-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link to='/' className='nav-link'>Sign Out</Link>
              </li>
              <li className='nav-item'>
                <Link to='/settings' className='nav-link'>Settings</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav