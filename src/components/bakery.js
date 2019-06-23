import React from 'react';
import {Container, Button, Col, Row, Card, CardImg, CardBody,CardTitle, CardSubtitle, CardGroup } from 'reactstrap';
import { Link } from 'react-router-dom'
import useModal from '../custom_hooks.js/modal_hook';
import KeyboardAddQuantity from './keyboardAddQuantity';
import MessageModal from './messageModal';


const Bakery = () => {



    const {toggle, toggleAdd, noToggleAdd, modal,
           product, bakeryDetails, setValue, reset, back, nums, addQtyNumber} = useModal();



    const bakeryList = bakeryDetails.map((item) =>{

        return(
            
            <Col className={'col-3'} style={{display: 'flex'}}>

            <CardGroup >
            <Card className={'mb-1'}> 
            <CardImg className={'img-thumbnail mx-auto d-block'}  style={{flexGrow: '10'}} src={item.img_path} alt="Card image cap" />
                <CardBody >
                <CardTitle>{item.product_description}</CardTitle>
                <CardSubtitle>{item.product_price}</CardSubtitle>
                <Button size='sm' color='success' outline onClick={() => toggle(item.product_description, 'bakery')}>Add Item</Button>
                </CardBody>
            </Card>
            </CardGroup>
            </Col>
            
        ); 
           
    });

    return (

        <Container className='container-fluid mt-2'>

        < MessageModal toggle = {toggle}
                       toggleAdd= {toggleAdd}
                       productDescription={product}
                       modal={modal} 
                       noToggleAdd={noToggleAdd}
                       product={product}
                       />            

             <Row >
{/* 
                <Col className={'col'}>
                </Col> */}

                <Col className={'col-8'}> 
                <Container>
                <Row>
                    {bakeryList}
                    
                </Row>
                  
                </Container>
                </Col>

                <Col >
                <h3 className={'text-left'}>Select a quantity</h3>
                <KeyboardAddQuantity     setValue={setValue}
                                         nums={nums}
                                         reset={reset}
                                         back={back}
                                         addQtyNumber={addQtyNumber}
                  />  
                </Col>


                <Link to="/">
                    <Button outline size='sm' color='primary' className={'mt-5'}> Shopping</Button>
                </Link>
            </Row>

        </Container>
       
    
    )
}

export default Bakery;
