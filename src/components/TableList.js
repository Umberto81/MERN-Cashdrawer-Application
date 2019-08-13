import React from 'react';
import { Table, Button } from 'reactstrap';
import {subTotal} from '../actions/totalActions'
import {  useDispatch } from "react-redux";
import { useSelector } from 'react-redux'


const TableList = (props) =>{

  const dispatch = useDispatch();
  const member = useSelector(state => state.products.member);

  const saveTotal = () =>{
    
    dispatch(subTotal(total));
  }

  let list = props.productsDetails.map((item, index) =>{

    return(
      <tr key={index}>
      <th scope="row" >{index + 1}</th>
      <td>{item.product_description}</td>
      <td>{item.product_price}</td>
      <td>{item.product_count}</td>
      <td><Button color='danger' size="sm" onClick={() => props.deleteProduct(index)}>Delete</Button></td>
    </tr>
    )
  });

  const total = props.productsDetails.reduce((a, b) => {
    if(member === true){
      //calculate 10% discount if members
      let discount = a + b.product_price * b.product_count /10 
      return  a + b.product_price * b.product_count - discount;
      
    }
    return a + b.product_price * b.product_count;
  }, 0);


    return(
      <div>
<Table striped hover dark responsive size='sm'>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>  
      </Table>

      <Table dark>
        <thead>
            <tr>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>	£ {total}</td>
            </tr>

          </tbody>
      </Table>

      <Button color='success' size="lg"  type='button' style={{display: props.productsDetails.length === 0 ? 'none' : 'block' }} onClick={() => saveTotal(total)}>SubTotal</Button>  



      </div>

      
    )
}

export default TableList;