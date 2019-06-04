
import React from 'react';
import Keyboard from './keyboard';
import {Container, Row, Col, Button} from 'reactstrap';
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
      <Container>
      <MainBar />
      <Row className={'mt-1'}>
          <Col >
              <TableList productsDetails={productDetails}
                         deleteProduct={deleteProduct}
              />
          </Col>
          
          
          <Col className={'col-md-3'}>
          <Row>
            <Link to="/bakery">
            <Button color='secondary'  size='sm'  outline   className={'mr-1 mb-1'} > Bakery </Button> 
            </Link>

            <Link to="/produce">
            <Button color='secondary'  size='sm'  outline   className={'mr-1 mb-1'} >Produce</Button>  
            </Link>

            <Button outline color='danger' size='sm' className={'mr-1 mb-1'} onClick={clearList}>Clear</Button>
            <Button color='warning' size='sm' className={'mr-1 mb-1'} onClick={clearList}>Customer Refusal</Button>
          
            <Link to="/managerFunctions">
            <Button  color='primary' className={'mr-1 mb-1'} size='sm'>Manager Functions</Button>
            </Link>

            <Button color='warning' size='sm' className={'mr-1 mb-1'} onClick={addCarrierBag}>Carrier Bag</Button>




          </Row>
          
          </Col>

          <Col></Col>     
          
          <Col>
          <Keyboard         setValue={setValue}
                            nums={nums}
                            reset={reset}
                            back={back}
                            requestProducts={requestProducts}
                  />  
          </Col>

      </Row>


  </Container>
    )
  
}

export default Main;