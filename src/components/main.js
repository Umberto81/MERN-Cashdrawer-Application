
import React from 'react';
import Keyboard from './keyboard';
import SubTotalKeyboard from './subTotalKeyboard';
import {Row, Col, Button, Card, CardBody} from 'reactstrap';
import MainBar from './mainBar';
import TableList from './TableList';
import useFunctions from '../custom_hooks.js/hooks';
import useSubTotal from '../custom_hooks.js/subTotalHook';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ModalTotal from './modalTotal';
import ErrorModal from './errorModal';

const Main = (props) => {

 
     const {
      
      nums, setValue, reset, back, requestProducts,
      deleteProduct, productDetails, clearList,
      addCarrierBag, discount, member, setMember, errors,
      togglErerror, modalError
      
      } = useFunctions('');

      const {setSubtotal, setValueTotal, numsTotal, resetTotal, backTotal, calculateChange, toggle, modal, resetAfterTotal} = useSubTotal();

      const total = useSelector(state => state.products.total);
  
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
              
              
              <Col className={'col-2 d-flex flex-column justify-content-between'}>
              <Row >
                <Button color='secondary'  size='lg'  outline   className={'mr-1 mb-1 keyboard-flex'} to='/bakery' tag={Link}>In store Bakery </Button> 
    
                <Button color='secondary'  size='lg'  outline   className={'mr-1 mb-1 keyboard-flex'} tag={Link} to='/produce'>Produce</Button>  
                <Button color='danger' size='lg' className={'mr-1 mb-1 keyboard-flex'} onClick={clearList}>Clear</Button>
              
    
                <Button color='warning' size='lg' className={'mr-1 mb-1 '} onClick={clearList}>Customer Refusal</Button>
                <Button color='warning' size='lg' className={'mr-1 mb-1 keyboard-flex'} onClick={discount}>Card Discount</Button>
                <Button color='warning' size='lg' className={'mr-1 mb-1 keyboard-flex'} onClick={addCarrierBag}>Carrier Bag</Button>
    
                <Button  color='secondary' outline className={'mr-1 mb-1'} size='lg' tag={Link}  to="/managerFunctions">Manager Functions</Button>
    
                <Button color='secondary' outline size='lg' className={'mr-1 mb-1 keyboard-flex'} tag={Link} to='productEnquiry'>Product Enquiry</Button>
              </Row>
              
              </Col>

              <Col className={'col-2 d-flex flex-direction-column'}>
                {total !== null ? 
               <div> 

              <Button color='secondary' size='lg' value='1.00' className={'mr-1 mb-1 keyboard-flex'} onClick={e => setSubtotal(e)}>£ 1 </Button> 
              <Button color='secondary' size='lg' value='2.00' className={'mr-1 mb-1 keyboard-flex'} onClick={e => setSubtotal(e)}>£ 2 
              </Button> 
              <Button color='secondary' size='lg' value='10.00' className={'mr-1 mb-1 keyboard-flex'} onClick={e => setSubtotal(e)}>£ 10 </Button> 
              <Button color='secondary' size='lg' value='20.00' className={'mr-1 mb-1 keyboard-flex'} onClick={e => setSubtotal(e)}>£ 20 </Button> 
             
              <Card style={{minWidth: '125px'}}>
                 <CardBody>
                   total:  {total}
                </CardBody>
              </Card>
              
              </div>
              
              : null}

              </Col>
    
              
              <Col className={'col-3'}>
              {total !== null ? 
              <div>
                 <SubTotalKeyboard setValueTotal={setValueTotal}
                                   numsTotal={numsTotal}
                                   resetTotal={resetTotal}
                                   backTotal={backTotal}
                                   calculateChange={calculateChange}
                      />  
              </div> :
              <div>
              <Keyboard         setValue={setValue}
                                nums={nums}
                                reset={reset}
                                back={back}
                                requestProducts={requestProducts}

                      />  

              </div>}
             
              </Col>
              < ModalTotal toggle = {toggle}
                             modal={modal} 
                             resetAfterTotal={resetAfterTotal}
              />    
              {errors &&  <ErrorModal toggle={togglErerror}
                          modal={modalError}
                          errors={errors} 
              
              />   }
                  

          </Row>
          
          </div>
    
    
        )
      
   
  
}


export default Main;
