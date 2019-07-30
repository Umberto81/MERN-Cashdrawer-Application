import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import KeyboardSearchProduct  from './keyboardSearchProduct';
import {Link} from 'react-router-dom';
import MainBar from './mainBar';
import useProduct from '../custom_hooks.js/productEnquiry_hook';
import CardProductEnquiry from './cardProductEnquiry';


const ProductEnquiry = () =>{

 
  const {requestProduct, product, setValue, reset, back, nums, addQtyNumber} = useProduct();

    return(
      <fragment>

             <MainBar />

             <Row style={{justifyContent: 'center'}} className={'mb-3'}>
               <h2 >Insert Code to Enquire a Product</h2>

               </Row>

             <Row className={'mt-1'}>
               
               <Col className={'col-2'}></Col>
            
           <Col className={'col-4'} >
       
              <CardProductEnquiry product={product}/>
              <br></br>

              <Button color='secondary'  size='sm'  outline   className={'mr-1 mb-1 button-alphabet'} to='/main' tag={Link}> Shopping </Button>

             </Col>

    <Col className={'col-4'}>

        <KeyboardSearchProduct setValue={setValue}
                               nums={nums}
                               reset={reset}
                               back={back}
                               addQtyNumber={addQtyNumber}
                              requestProduct={requestProduct}

        
        
        />
      </Col>

    </Row>


    </fragment>
   
    )
}

export default ProductEnquiry;