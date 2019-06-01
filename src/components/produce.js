import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Container, Button, Col, Row, Card, CardImg, CardBody,CardTitle, CardSubtitle, CardGroup } from 'reactstrap';
import { Link } from 'react-router-dom'
import useFunctions from '../custom_hooks.js/hooks';

const Produce = () => {
    const { addItemToState, itemsInserted } = useFunctions();

    const [produceDetails, setProduceDetails] = useState([]);

    //shows bakery products in database
    useEffect(() =>{
    
        //request to fetch db products

    axios.get('http://localhost:4000/produce/')
    .then(response =>{
        //implementare il salvataggio in array
        setProduceDetails(response.data);
    });
  
    }, []);


    const produceList = produceDetails.map((item) =>{
        return(
        	

    <Col className={'col-md-2'} style={{display: 'flex'}}>
        
      <CardGroup >
      <Card > 
      <CardImg className={'img-thumbnail mx-auto d-block'}  style={{flexGrow: '10'}}S src={item.img_path} alt="Card image cap" />
        <CardBody >
        <CardTitle>{item.product_description}</CardTitle>
        <CardSubtitle>{item.product_price}</CardSubtitle>
        <Button size='sm' color='success' outline onClick={(e) => addItemToState(e, 'produce')} value={item.product_description}>Add Item</Button>
        </CardBody>
      </Card>
     </CardGroup>
    </Col>
        
            
        ); 
           
    });

    return (
        <Container className='container-fluid'>


            <Col>
            <p>{itemsInserted? 'inserito' : null}</p>
            </Col>
             <Row >
        {produceList}

        </Row>

          <Link to="/">
            <Button outline size='sm' color='primary' className={'mt-5'}> Shopping</Button>
            </Link>
        </Container>
       
    
    )
}

export default Produce;


