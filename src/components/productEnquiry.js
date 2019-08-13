import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import KeyboardSearchProduct  from './keyboardSearchProduct';
import {Link} from 'react-router-dom';
import MainBar from './mainBar';
import useProduct from '../custom_hooks.js/productEnquiry_hook';
import CardProductEnquiry from './cardProductEnquiry';
import ErrorModal from './errorModal';


const ProductEnquiry = () =>{

 
  const {requestProduct, product, setValue, reset, back, nums, addQtyNumber, 
    errors, togglErerror,  modalError } = useProduct();

    return(
      <div>

             <MainBar />

             <Row className={'mb-3 justify-content-center'}>
               <h2 >Insert Code to Enquire a Product</h2>

               </Row>

             <Row className={'mt-1'}>
               
               <Col className={'col-2'}></Col>
            
           <Col className={'col-4'} >
       
              <CardProductEnquiry product={product}/>
              <br></br>

              <Button color='secondary'  size='sm'  outline   className={'mr-1 mb-1 h-25 d-flex align-items-center justify-content-center'} to='/main' tag={Link}> Shopping </Button>

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

      {errors &&  <ErrorModal toggle={togglErerror}
                              modal={modalError}
                              errors={errors} 
              
              />   }
    </Row>


    </div>
   
    )
}

export default ProductEnquiry;