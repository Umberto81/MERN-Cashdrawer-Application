import React from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col, Container } from 'reactstrap';
import useLogin from '../custom_hooks.js/login_hook'
import {
  withRouter
} from "react-router-dom";
import ProtectedRoute from './protectedRoute';

const Login = (props) => {



  const INITIAL_STATE = {
    username: '',
    password: ''
  }


  const {
    handleChange, value, handleSubmit, logged
 } = useLogin(INITIAL_STATE, props);

  return (
    
    <Container>
     
    <Row>
      <Col></Col>
        <Col className={'col-md-3 pt-5'}>
        <Form>
    <FormGroup >
      <Label for="username">Username</Label>
      <Input type="text" name="username" value={value.username} id="username" placeholder="Username" 
        onChange={handleChange}
      />
    </FormGroup>
    <FormGroup>
      <Label for="Password">Password</Label>
      <Input type="password" name="password" value={value.password} id="examplePassword" placeholder="Password"
                  onChange={handleChange}
                  />
    </FormGroup>

    <Button size='sm' type='button' onClick={(e) => handleSubmit(e, props)}>Submit</Button>
    </Form>
        </Col>

    <Col>
    </Col>

    </Row>
    </Container>

    
)
 

   
}

export default withRouter(Login);

