import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container } from 'reactstrap';
import KeyboardSearchProduct  from './keyboardSearchProduct';
import {Link} from 'react-router-dom';
import MainBar from './mainBar';
import useModal from '../custom_hooks.js/productEnquiry_hook';
import MessageModal from './messageModal';

const ProductEnquiry = () =>{

 
  const {toggle, toggleAdd, noToggleAdd, modal,
    product, bakeryDetails, setValue, reset, back, nums, addQtyNumber, alphabeticCall, newlist, listTrue, callAllItems} = useModal();


    return(
      <div>
             <MainBar />
             <Row className={'mt-1'}>
             < MessageModal toggle = {toggle}
                       toggleAdd= {toggleAdd}
                       productDescription={product}
                       modal={modal} 
                       noToggleAdd={noToggleAdd}
                       product={product}
                       />     
          
           <Col className={'col-md-6'}>

      <Button color='secondary'  size='sm'  outline   className={'mr-1 mb-1'} to='/main' tag={Link}> Shopping </Button> 
      </Col>
      
     
       
      
    <Col className={'pt-5'}>
        <KeyboardSearchProduct setValue={setValue}
                                         nums={nums}
                                         reset={reset}
                                         back={back}
                                         addQtyNumber={addQtyNumber}
        
        
        
        />
      </Col>

    </Row>


      </div>
   
    )
}

export default ProductEnquiry;