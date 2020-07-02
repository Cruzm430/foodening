import React, {Component} from 'react';
import {Card, Button} from 'react-bootstrap';
import * as data from '../Data.json';

class GroceryList extends Component{
  render(){
    const groceries = data.default.products
    return(
      <div className='container'>
        <h1 className='display-4 py-4 text-center'>Grocery List</h1>
        <div className='row'>
          <div className='col-12'>
            <table className='table table-image'>
              <thead className='border'>
                <tr>
                  <th scope='col' className='text-center border'>Item #</th>
                  <th scope='col' className='text-center border'>Product Image</th>
                  <th scope='col' className='text-center border'>Product Name</th>
                  <th scope='col' className='text-center border'>Remove</th>
                </tr>
              </thead>
              <tbody>
                {
                  groceries.map((grocery,idx)=>
                  <tr key={idx}>
                    <th scope='row' className='text-center align-middle border w-10'>{idx + 1}</th>
                    <td className='w-25 border'>
                      <img alt='' src={grocery.image} className='image-fluid image-thumbnail'/>
                    </td>
                    <td className=' text-center align-middle border'>{grocery.title}</td>
                    <td className='h-100 border text-center align-middle'>
                      <div className='form-check'>
                      <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                      </div>
                    </td>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
        <div className='d-flex justify-content-end'>
        <Button>Remove Selected</Button>
        </div>
      </div>
    )
  }
}

export default GroceryList