
import React from 'react';
import Keyboard from './keyboard';
import {Row, Col, Button} from 'reactstrap';
import MainBar from './mainBar';
import TableList from './TableList';
import useFunctions from '../custom_hooks.js/hooks';
import { Link } from 'react-router-dom'

const Main = () => {

 
     const {
      
      nums, setValue, reset, back, requestProducts,
      deleteProduct, productDetails, clearList,
      addCarrierBag
      
      } = useFunctions('');

  
  
        return (
          <div>
          <MainBar  
            />
          
            
          <Row className={'mt-1'}>
              <Col >
                  <TableList productsDetails={productDetails}
                             deleteProduct={deleteProduct}
                  />
              </Col>
              
              
              <Col className={'col-md-3'} style={{display: 'flex', flexDirection: 'column'}}>
              <Row >
                <Button color='secondary'  size='sm'  outline   className={'mr-1 mb-1 keyboard-flex'} to='/bakery' tag={Link}> Bakery </Button> 
    
                <Button color='secondary'  size='sm'  outline   className={'mr-1 mb-1 keyboard-flex'} tag={Link} to='/produce'>Produce</Button>  
    
                <Button color='danger' size='sm' className={'mr-1 mb-1 keyboard-flex'} onClick={clearList}>Clear</Button>
              </Row>
    
              <Row>
                <Button color='warning' size='sm' className={'mr-1 mb-1 keyboard-flex'} onClick={clearList}>Customer Refusal</Button>
                <Button color='warning' size='sm' className={'mr-1 mb-1 keyboard-flex'}>Card Discount</Button>
    
                <Button color='warning' size='sm' className={'mr-1 mb-1 keyboard-flex'} onClick={addCarrierBag}>Carrier Bag</Button>
                </Row>    
    
              <Row>
                <Button  color='secondary' outline className={'mr-1 mb-1 keyboard-flex'} size='sm' tag={Link}  to="/managerFunctions">Manager Functions</Button>
    
                <Button color='danger' size='sm' className={'mr-1 mb-1 keyboard-flex'}>Log</Button>
          
    
          
    
              </Row>
              
              </Col>
    
              
              <Col>
              <Keyboard         setValue={setValue}
                                nums={nums}
                                reset={reset}
                                back={back}
                                requestProducts={requestProducts}
                      />  
              </Col>
    
          </Row>
          
          </div>
    
    
        )
      
   
  
}



export default Main;
