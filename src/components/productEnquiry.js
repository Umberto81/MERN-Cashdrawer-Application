import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container } from 'reactstrap';
import KeyboardSearchProduct  from './keyboardSearchProduct';
import {Link} from 'react-router-dom';
import MainBar from './mainBar';
import useProduct from '../custom_hooks.js/productEnquiry_hook';
import CardProductEnquiry from './cardProductEnquiry';


const ProductEnquiry = () =>{

 
  const {requestProduct, product, setValue, reset, back, nums, addQtyNumber} = useProduct();

    return(
      <div>
             <MainBar />
             <Row className={'mt-1'}>
            
           <Col className={'col-md-6'}>

      <Button color='secondary'  size='sm'  outline   className={'mr-1 mb-1'} to='/main' tag={Link}> Shopping </Button>
       
      <CardProductEnquiry product={product}/>
      </Col>

    <Col className={'pt-5'}>

        <KeyboardSearchProduct setValue={setValue}
                               nums={nums}
                               reset={reset}
                               back={back}
                               addQtyNumber={addQtyNumber}
                              requestProduct={requestProduct}

        
        
        />
      </Col>

    </Row>


      </div>
   
    )
}

export default ProductEnquiry;