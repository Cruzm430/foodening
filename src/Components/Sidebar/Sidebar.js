import React, {Component} from 'react';
import './Sidebar.css';

class Sidebar extends Component{
  render(){
    return(
      <div className='navbar'>
        <input placeholder='Search for Recipies'/>
        Your Recipies
          <div>list</div>
      </div>
    )
  }
}

export default Sidebar