import React from 'react';
import { Row, Button, Card, CardBody} from 'reactstrap';

const KeyboardAddQuantity = (props) =>{


    return(
        <div>


          <Row className={'pt-2 pb-2'}>
          <Card style={{minWidth: '125px'}}>
            <CardBody>

            {props.nums === '' ? 'insert a code' : props.nums}

            </CardBody>

          </Card>

          </Row>
          
        
          <Row>

                    <Button color='secondary' className={'mr-1 mb-1 '} type='button' value = '1' onClick={e => props.setValue(e)}>1</Button>
                    <Button color='secondary' className={'mr-1 mb-1'}  type='button' value = '2' onClick={e => props.setValue(e)}>2</Button>
                    <Button color='secondary' className={'mr-1 mb-1'} type='button' value = '3' onClick={e => props.setValue(e)}>3</Button>  

            </Row>

            <Row>
                    <Button color='secondary' type='button' className={'mr-1 mb-1'} value = '4' onClick={e => props.setValue(e)}>4</Button>
                    <Button color='secondary' type='button' className={'mr-1 mb-1'} value = '5' onClick={e => props.setValue(e)}>5</Button>
                    <Button color='secondary' type='button' className={'mr-1 mb-1'} value = '6' onClick={e => props.setValue(e)}>6</Button>  

            </Row>

            <Row>
                    <Button color='secondary' type='button' className={'mr-1 mb-1'} value = '7' onClick={e => props.setValue(e)}>7</Button>
                    <Button color='secondary' type='button' className={'mr-1 mb-1'} value = '8' onClick={e => props.setValue(e)}>8</Button>
                    <Button color='secondary' type='button' className={'mr-1 mb-1'} value = '9' onClick={e => props.setValue(e)}>9</Button>  
                    
            </Row>
            <Row>
                    <Button color='secondary' type='button' className={'mr-1 mb-1'} onClick={props.reset}>AC</Button>  
                    <Button color='secondary' type='button' className={'mr-1 mb-1'} value = '0' onClick={e => props.setValue(e)}>0</Button> 
                    <Button color='secondary' type='button' className={'mr-1 mb-1'} value = '00' onClick={e => props.setValue(e)}>00</Button>  

            </Row>
            <Row>
                    <Button color='secondary' type='button' className={'mr-1 mb-1'} onClick={props.back}>Back</Button>  
                    <Button color='success' type='button' className={'mr-1 mb-1'} onClick={props.addQtyNumber}>Enter</Button>  

            </Row>

        </div>
    )
}

export default KeyboardAddQuantity;