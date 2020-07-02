import React, {Component} from 'react';

import * as data from '../Data.json'
import Jumbo from '../Components/Jumbo/Jumbo';
import Popular from '../Components/Popular/Popular';

class Welcome extends Component{
  render(){
    return(
      <div>
        <Jumbo data={data}/>
        <Popular data={data}/>
      </div>
    )
  }
}

export default Welcome