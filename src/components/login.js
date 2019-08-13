import React from 'react'
import { Row, Col, Container } from 'reactstrap';
import useLogin from '../custom_hooks.js/login_hook'
import KeyboardLogin from './keyboardLogin';
import { withRouter } from "react-router";


const Login = (props) => {

  


  const {
    
    handleSubmit,  setValue,  reset,
    back, nums, errors
    
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

    <Row>
      <Col className={'col-3'}></Col>
      <Col className={'col-8 justify-content-center'}>
      {errors.length !== 0? <div className={"bg-danger text-dark p-3 mb-2 mt-2 "}>
      {errors}

</div> : null}
      
      </Col>
    </Row>
    </Container>

    
)

}

export default withRouter(Login);

