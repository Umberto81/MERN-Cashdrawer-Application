import React, {useState} from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import useLogin from '../custom_hooks.js/login_hook'

const Login = () => {



  const INITIAL_STATE = {
    username: '',
    password: ''
  }


  const {
    handleChange, value, handleSubmit
 } = useLogin(INITIAL_STATE);


    return (
        <Row>
            <Col className={'col-md-3'}>
            <Form>
        <FormGroup>
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

        <Button size='sm'color='primary' onClick={handleSubmit}>Submit</Button>
        </Form>
            </Col>

        </Row>
        
    )
}

export default Login;

