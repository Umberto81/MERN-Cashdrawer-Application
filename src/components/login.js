import React from 'react'
import { Row, Col, Container, UncontrolledTooltip } from 'reactstrap';
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
    <div>
      <p style={{color: 'white'}}>How to Login: <span style={{textDecoration: "underline", color:"white"}} href="#" id="UncontrolledTooltipExample">tooltip</span>.</p>
      <UncontrolledTooltip placement="bottom" target="UncontrolledTooltipExample">
        The Login code is 1111
        Insert a different or longer number to see how errors are handled.

      </UncontrolledTooltip>
    </div>
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

