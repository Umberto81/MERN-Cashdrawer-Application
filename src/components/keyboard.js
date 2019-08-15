import React from 'react';
import { Row, Button, Card, CardBody, Col, UncontrolledTooltip} from 'reactstrap';


const Keyboard = (props) =>{


    return(
        <div>


          <Col className={'col d-flex flex-column'} >

        
          <Row>

                    <Button color='secondary' className={'mr-1 mb-1 keyboard-flex'} type='button' value = '1' onClick={e => props.setValue(e)}>1</Button>
                    <Button color='secondary' className={'mr-1 mb-1 keyboard-flex '}  type='button' value = '2' onClick={e => props.setValue(e)}>2</Button>
                    <Button color='secondary' className={'mr-1 mb-1 keyboard-flex'} type='button' value = '3' onClick={e => props.setValue(e)}>3</Button>  

            </Row>

            <Row>
                    <Button color='secondary' type='button' className={'mr-1 mb-1 keyboard-flex'} value = '4' onClick={e => props.setValue(e)}>4</Button>
                    <Button color='secondary' type='button' className={'mr-1 mb-1 keyboard-flex'} value = '5' onClick={e => props.setValue(e)}>5</Button>
                    <Button color='secondary' type='button' className={'mr-1 mb-1 keyboard-flex'} value = '6' onClick={e => props.setValue(e)}>6</Button>  

            </Row>

            <Row>
                    <Button color='secondary' type='button' className={'mr-1 mb-1 keyboard-flex'} value = '7' onClick={e => props.setValue(e)}>7</Button>
                    <Button color='secondary' type='button' className={'mr-1 mb-1 keyboard-flex'} value = '8' onClick={e => props.setValue(e)}>8</Button>
                    <Button color='secondary' type='button' className={'mr-1 mb-1 keyboard-flex'} value = '9' onClick={e => props.setValue(e)}>9</Button>  
                    
            </Row>
            <Row>
                    <Button color='secondary' type='button' className={'mr-1 mb-1 keyboard-flex'} onClick={props.reset}>AC</Button>  
                    <Button color='secondary' type='button' className={'mr-1 mb-1 keyboard-flex'} value = '0' onClick={e => props.setValue(e)}>0</Button> 
                    <Button color='secondary' type='button' className={'mr-1 mb-1 keyboard-flex'} value = '00' onClick={e => props.setValue(e)}>00</Button>  

            </Row>
            <Row>
                    <Button color='secondary' type='button' className={'mr-1 mb-1 keyboard-flex'} onClick={props.back}>Back</Button>  
                    <Button color='success' type='button' className={'mr-1 mb-1 keyboard-flex'} onClick={props.requestProducts}>Enter</Button>  

            </Row>

            <Row className={'pt-2 pb-2 justify-content-center'} >
          <Card style={{minWidth: '125px'}}>
            <CardBody>

            {props.nums === '' ? 'insert a code' : props.nums}

            </CardBody>

          </Card>
          <div>
      <p style={{color: 'white'}}>How to use the keyboard: <span style={{textDecoration: "underline", color:"white"}} href="#" id="UncontrolledTooltipExample">tooltip</span>.</p>
      <UncontrolledTooltip placement="left" target="UncontrolledTooltipExample">
        Digit from 2001 to 2008 and press enter to insert a bakery product. 
        Digit from 3001 to 3008 to insert a produce product. 
        This action mimics the scanning barcode laser function.
        Insert a different number to see how errors are handled.

      </UncontrolledTooltip>
    </div>

          </Row>
        </Col>

        </div>
    )
}

export default Keyboard;