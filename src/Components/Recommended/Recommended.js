import React from 'react';
import {Card, Button} from 'react-bootstrap';

const Recommended = (data) =>{
  const recos = data.data.default.results.slice(0,3)
    return(
      <div className='container pt-4'>
        <div className='row'>
        {recos.map(reco=>
          <div className='col' key={reco.id} >
            <Card className='text-center' style={{width: '18rem', height:'250px'}}>
            <Card.Header>{reco.title}</Card.Header>
              <Card.Body>
                <Card.Text>Ready in {reco.readyInMinutes} minutes!</Card.Text>
                <Button variant='primary'>Take me there!</Button>
              </Card.Body>
            </Card>
            </div>)}
          </div>
      </div>
    )
}

export default Recommended