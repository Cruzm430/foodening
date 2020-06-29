import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Welcome extends Component{
  render(){
    return(
      <div>
        <Link to='/main'><button>Sign In</button></Link>
        <Link to='/register'><button>Register</button></Link>
        <Link to='/main'><button>Continue as Guest</button></Link>
      </div>
    )
  }
}

export default Welcome