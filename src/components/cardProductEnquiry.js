import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import {connect} from 'react-redux'
import useModal from '../custom_hooks.js/modalBakery_hook';
import MessageModal from './messageModal';


const CardProductEnquiry = (props) => {

  const {toggle, toggleAdd, noToggleAdd, modal,
    product, bakeryDetails, setValue, reset, back, nums, addQtyNumber, alphabeticCall, newlist, listTrue, callAllItems} = useModal();

    const {productEnquired} = props;

    const list = productEnquired.map((item) =>{
      return(
        
        <div>
          <CardTitle>{item.product_description}</CardTitle>
          <CardSubtitle>Price: {item.product_price}</CardSubtitle>
          <CardText>Product Code: {item.product_code}</CardText>
          <Button color='secondary' size='sm'  onClick={() => toggle(item.product_description, item.product_section)}>Add Item</Button>

        </div>
          
      )
    });
  return (

    <fragment>

< MessageModal toggle = {toggle}
                       toggleAdd= {toggleAdd}
                       productDescription={product}
                       modal={modal} 
                       noToggleAdd={noToggleAdd}
                       product={product}
                       />      
 <Card>
       
       <CardBody>
         {list}
       </CardBody>
     </Card>

    </fragment>
     
  );
};

const mapStatetoProps = state => ({
  productEnquired: state.product
});



export default connect(mapStatetoProps)(CardProductEnquiry);
