import React from 'react';
import { Table, Button } from 'reactstrap';

const TableList = (props) =>{

  let list = props.productsDetails.map((item, index) =>{

    return(
      <tr key={index}>
      <th scope="row" >{index + 1}</th>
      <td>{item.product_description}</td>
      <td>{item.product_price}</td>
      <td><Button color='danger' size="sm" outline onClick={() => props.deleteProduct(index)}>Delete</Button></td>
    </tr>
    )
  });

  const total = props.productsDetails.reduce((a, b) => {
    return a + b.product_price;
  }, 0);



    return(
<Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Price</th>
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
       <Button color='success' size="sm"  outline type='button' style={{display: props.productsDetails.length === 0 ? 'none' : 'block' }}>SubTotal</Button>  

      </Table>
    )
}

export default TableList;