import React from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col, Container } from 'reactstrap';
import useLogin from '../custom_hooks.js/login_hook'
import KeyboardLogin from './keyboardLogin';
import useFunctions from '../custom_hooks.js/hooks';
import { withRouter } from "react-router";


const Login = (props) => {

  


  const {
    
    handleSubmit,  setValue, 
    reset,
    back,
    nums,
    
 } = useLogin(props);

  return (
    
    <Container>
     
    <Row className={' pt-5'}>
      <Col className={'col-4'}></Col>
        <Col className={'col-5'}>
        <KeyboardLogin         setValue={setValue}
                                nums={nums}
                                reset={reset}
                                back={back}
                                handleSubmit={handleSubmit}

                      />  
        </Col>

    <Col className={'col-3'}>
    </Col>

    </Row>
    </Container>

    
)

}

export default withRouter(Login);

