import React from 'react';
import { Table, Button } from 'reactstrap';
import {subTotal} from '../actions/totalActions'
import {  useDispatch } from "react-redux";


const TableList = (props) =>{

  const dispatch = useDispatch();

  const saveTotal = () =>{
    dispatch(subTotal(total));
    console.log(total);
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
    return a + b.product_price * b.product_count;
  }, 0);


    return(
<Table striped hover dark responsive>
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
       <thead>
         <tr>Total</tr>
       </thead>
       <tbody>
         <td>	£ {total}</td>

       </tbody>
       <Button color='success' size="lg"  type='button' style={{display: props.productsDetails.length === 0 ? 'none' : 'block' }} onClick={() => saveTotal(total)}>SubTotal</Button>  

      </Table>
    )
}

export default TableList;