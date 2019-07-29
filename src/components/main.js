
import React from 'react';
import Keyboard from './keyboard';
import {Row, Col, Button} from 'reactstrap';
import MainBar from './mainBar';
import TableList from './TableList';
import useFunctions from '../custom_hooks.js/hooks';
import { Link, withRouter } from 'react-router-dom'

const Main = () => {

 
     const {
      
      nums, setValue, reset, back, requestProducts,
      deleteProduct, productDetails, clearList,
      addCarrierBag, discount, member, setMember
      
      } = useFunctions('');

  
  
        return (
          <div>
          <MainBar member={member}
                    setMember={setMember}
            />
          
            
          <Row className={'mt-1'}>
              <Col >
                  <TableList productsDetails={productDetails}
                             deleteProduct={deleteProduct}
                  />
              </Col>
              
              
              <Col className={'col-4'} style={{display: 'flex', flexDirection: 'column'}}>
              <Row >
                <Button color='secondary'  size='lg'  outline   className={'mr-1 mb-1 keyboard-flex'} to='/bakery' tag={Link}>In store  Bakery </Button> 
    
                <Button color='secondary'  size='lg'  outline   className={'mr-1 mb-1 keyboard-flex'} tag={Link} to='/produce'>Produce</Button>  
    
                <Button color='danger' size='lg' className={'mr-1 mb-1 keyboard-flex'} onClick={clearList}>Clear</Button>
              </Row>
    
              <Row>
                <Button color='warning' size='lg' className={'mr-1 mb-1 keyboard-flex'} onClick={clearList}>Customer Refusal</Button>
                <Button color='warning' size='lg' className={'mr-1 mb-1 keyboard-flex'} onClick={discount}>Card Discount</Button>
                <Button color='warning' size='lg' className={'mr-1 mb-1 keyboard-flex'} onClick={addCarrierBag}>Carrier Bag</Button>
                </Row>    
    
              <Row>
                <Button  color='secondary' outline className={'mr-1 mb-1 keyboard-flex'} size='lg' tag={Link}  to="/managerFunctions">Manager Functions</Button>
    
                <Button color='secondary' outline size='lg' className={'mr-1 mb-1 keyboard-flex'} tag={Link} to='productEnquiry'>Product Enquiry</Button>
          
    
          
    
              </Row>
              
              </Col>
    
              
              <Col className={'col-4'}>
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



export default withRouter(Main);
