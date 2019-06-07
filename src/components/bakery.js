import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Container, Button, Col, Row, Card, CardImg, CardBody,CardTitle, CardSubtitle, CardGroup } from 'reactstrap';
import { Link } from 'react-router-dom'
import useFunctions from '../custom_hooks.js/hooks';
import Keyboard from './keyboard';
import MessageModal from './messageModal';


const Bakery = (props) => {


    
    const {
    
        setproductDetails,
        productDetails,
        nums,
        setValue,
        reset,
        back,
        
    } = useFunctions();

    const [bakeryDetails, setBakeryDetails] = useState([]);
    const [modal, setModal] = useState(false);

    //toggle for modal window
    const toggle = () => {

        setModal(!modal);

    }

    // adds item to shoppimg list
    const addItemToState = (e, url) => {
        e.preventDefault();
        axios.get('http://localhost:4000/' + url + '/' + e.target.value)
            .then(response => {
                setproductDetails(productDetails.concat(response.data));
                console.log(modal);
                toggle();
            });


    }

    //const [quantity, setquantity] = useState();

    //shows bakery products in database
    useEffect(() =>{
    
        //request to fetch db products

    axios.get('http://localhost:4000/bakery')
    .then(response =>{
        //implementare il salvataggio in array
        setBakeryDetails(response.data);
    });
  
    }, []);

    const bakeryList = bakeryDetails.map((item) =>{
        return(
            
    <Col className={'col-4'} style={{display: 'flex'}}>

      <CardGroup >
      <Card className={'mb-1'}> 
      <CardImg className={'img-thumbnail mx-auto d-block'}  style={{flexGrow: '10'}} src={item.img_path} alt="Card image cap" />
        <CardBody >
        <CardTitle>{item.product_description}</CardTitle>
        <CardSubtitle>{item.product_price}</CardSubtitle>
        <Button size='sm' color='success' outline onClick={(e) => addItemToState(e, 'bakery')} value={item.product_description}>Add Item</Button>
        </CardBody>
      </Card>
     </CardGroup>
     </Col>
            
        ); 
           
    });

    return (
        <Container className='container-fluid mt-2'>
        < MessageModal toggle = {toggle}
                       modal={modal} />            

             <Row >

                <Col className={'col'}>
                </Col>

                <Col className={'col-6'}> 
                <Container>
                <Row>
                    {bakeryList}
                    
                </Row>
                  
                </Container>
                </Col>

                <Col>
                {/* <Keyboard setValue={setValue}
                            nums={nums}
                            reset={reset}
                            back={back}
                  />   */}
                </Col>


            <Link to="/">
                <Button outline size='sm' color='primary' className={'mt-5'}> Shopping</Button>
                </Link>
            </Row>

        </Container>
       
    
    )
}

export default Bakery;

