import React from 'react';
import { Row, Button, Card, CardBody, Col} from 'reactstrap';

const SubtotalKeyboard = (props) =>{



    return(
        <div>


          <Col className={'col'} style={{display: 'flex', flexDirection: 'column'}} >

        
          <Row>

                    <Button color='secondary' className={'mr-1 mb-1 keyboard-flex'} type='button' value = '1' onClick={e => props.setValueTotal(e)}>1</Button>
                    <Button color='secondary' className={'mr-1 mb-1 keyboard-flex '}  type='button' value = '2' onClick={e => props.setValueTotal(e)}>2</Button>
                    <Button color='secondary' className={'mr-1 mb-1 keyboard-flex'} type='button' value = '3' onClick={e => props.setValueTotal(e)}>3</Button>  

            </Row>

            <Row>
                    <Button color='secondary' type='button' className={'mr-1 mb-1 keyboard-flex'} value = '4' onClick={e => props.setValueTotal(e)}>4</Button>
                    <Button color='secondary' type='button' className={'mr-1 mb-1 keyboard-flex'} value = '5' onClick={e => props.setValueTotal(e)}>5</Button>
                    <Button color='secondary' type='button' className={'mr-1 mb-1 keyboard-flex'} value = '6' onClick={e => props.setValueTotal(e)}>6</Button>  

            </Row>

            <Row>
                    <Button color='secondary' type='button' className={'mr-1 mb-1 keyboard-flex'} value = '7' onClick={e => props.setValueTotal(e)}>7</Button>
                    <Button color='secondary' type='button' className={'mr-1 mb-1 keyboard-flex'} value = '8' onClick={e => props.setValueTotal(e)}>8</Button>
                    <Button color='secondary' type='button' className={'mr-1 mb-1 keyboard-flex'} value = '9' onClick={e => props.setValueTotal(e)}>9</Button>  
                    
            </Row>
            <Row>
                    <Button color='secondary' type='button' className={'mr-1 mb-1 keyboard-flex'} onClick={props.resetTotal}>AC</Button>  
                    <Button color='secondary' type='button' className={'mr-1 mb-1 keyboard-flex'} value = '0' onClick={e => props.setValueTotal(e)}>0</Button> 
                    <Button color='secondary' type='button' className={'mr-1 mb-1 keyboard-flex'} value = '00' onClick={e => props.setValueTotal(e)}>00</Button>  

            </Row>
            <Row>
                    <Button color='secondary' type='button' className={'mr-1 mb-1 keyboard-flex'} onClick={props.backTotal}>Back</Button>  
                    <Button color='success' type='button' className={'mr-1 mb-1 keyboard-flex'} onClick={props.calculateChange}>Enter</Button>  

            </Row>

            <Row className={'pt-2 pb-2 justify-content-center'} >
          <Card style={{minWidth: '125px'}}>
            <CardBody>

            {props.numsTotal === '' ? 'insert money amount' : props.numsTotal}

            </CardBody>

          </Card>

          </Row>
        </Col>




        </div>
    )
}

export default SubtotalKeyboard;