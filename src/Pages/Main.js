import React, {Component} from 'react';
import Nav from '../Components/Nav/Nav';
import Sidebar from '../Components/Sidebar/Sidebar';
import Content from '../Components/Content/Content';
import Divider from '../Components/Divider/Divider';

class Main extends Component{
  render(){
    return(
      <div>
        <Nav/>
        <div className='main'>
          <Sidebar/>
          <Divider/>
          <Content/>
        </div>
      </div>
    )
  }
}

export default Main