import React from 'react';
import { Row, Button, Card, CardBody, Col} from 'reactstrap';

const KeyboardLogin = (props) =>{


    return(
        <div>
            <Row>
            <Col   className={'col-md-4 justify-content-center'}>
             <Card style={{minWidth: '125px'}}>
            <CardBody>

            {props.nums === '' ? 'insert password' : props.nums}

            </CardBody>

          </Card>

        </Col>
                
    
    

        <Col>
<Row>


<Button color='secondary' className={'mr-1 mb-1 keyboard-flex'} type='button' value = '1' onClick={e => props.setValue(e)}>1</Button>
<Button color='secondary' className={'mr-1 mb-1 keyboard-flex'}  type='button' value = '2' onClick={e => props.setValue(e)}>2</Button>
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
<Button color='success' type='button' className={'mr-1 mb-1 keyboard-flex'} onClick={props.handleSubmit}>Enter</Button>  

</Row>

</Col>

</Row>  
          
        </div>
    )
}

export default KeyboardLogin;