import React from 'react';
import {Card, Button} from 'react-bootstrap';

const Popular = (data) =>{
  const populars = data.data.default.results.slice(0,3)
    return(
      <div>
        <div className='album py-5 bg-light'>
          <div className='container'>
            <h3 className='text-center pb-3'>Popular Recipes</h3>
            <div className='row'>
            {populars.map(popular=>
              <div className='col-md-4' key={popular.id}>
                <Card className='text-center bg-light mb-4 shadow-sm h-100' >
                  <Card.Img  className="bd-placeholder-img card-img-top" style={{width:"100%", height:"15vw", objectFit:'cover' }}src={`https://spoonacular.com/recipeImages/${popular.image}`}/>
                  <Card.Body className='d-flex flex-column'>
                    <Card.Text>{popular.title}</Card.Text>
                    <Card.Text className=" text-muted mt-auto mx-auto">Ready in <span className='font-weight-bold'>{popular.readyInMinutes}</span> minutes</Card.Text>
                    <Button className='mt-auto bg-primary w-50 mx-auto'>Make it!</Button>
                  </Card.Body>
                </Card>
                </div>)}
                </div>
              </div>
            </div>
        </div>
    )
}

export default Popular