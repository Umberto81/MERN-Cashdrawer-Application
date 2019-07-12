import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container } from 'reactstrap';
import useProductEnquiry from '../custom_hooks.js/productEnquiry_hook';


const ProductEnquiry = () =>{

  const   INITIAL_STATE = {
      productCode: ''
  }

  const {value, handleChange, handleSubmit} = useProductEnquiry(INITIAL_STATE);

    return(
        <Container>
     
    <Row>
      <Col></Col>
        <Col className={'col-md-3 pt-5'}>
        <Form>
    <FormGroup >
      <Label for="productCode">Product Code</Label>
      <Input type="text" name="productCode" value={value.productCode} id="productCode" placeholder="productCode" 
        onChange={handleChange}
      />
    </FormGroup>
    <Button size='sm' type='button' onClick={(e) => handleSubmit(e)}>Submit</Button>
    </Form>
        </Col>

    <Col>
    </Col>

    </Row>
    </Container>
    )
}

export default ProductEnquiry;