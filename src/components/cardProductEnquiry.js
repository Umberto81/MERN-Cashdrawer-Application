import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import useModal from '../custom_hooks.js/modalBakery_hook';
import MessageModal from './messageModal';
import { useSelector } from 'react-redux'


const CardProductEnquiry = (props) => {

  const {toggle, toggleAdd, noToggleAdd, modal,
    product} = useModal();

    const productEnquired = useSelector(state => state.products.product);

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


export default CardProductEnquiry;
