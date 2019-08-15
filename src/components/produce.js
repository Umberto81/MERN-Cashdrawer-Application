import React from 'react';
import {Container, Button, Col, Row, Card, CardImg, CardBody,CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom'
import useModal from '../custom_hooks.js/modalProduce_hook';
import KeyboardAddQuantity from './keyboardAddQuantity';
import MessageModal from './messageModal';
import MainBar from './mainBar'

const Bakery = () => {



    const {toggle, toggleAdd, noToggleAdd, modal,
           product, produceDetails, setValue, reset, back, nums, addQtyNumber, alphabeticCall, newlist, listTrue, callAllItems} = useModal();

    const produceList = produceDetails.sort((a, b) =>{
        let nameA = a.product_description;
        let nameB = b.product_description;

        if(nameA < nameB){
            return(-1);
        }
        if(nameA > nameB){
            return(1);
        }

        return 0;
        
            }).map((item) =>{

        return(
            
            <Button size='sm' color='secondary' className={' mt-1 mr-1'} onClick={() => toggle(item.product_description, 'bakery')}>
                <img  style={{backgroundSize: 'cover', display: 'inline-block', height:'150px', width: '150px'}} src={item.img_path} alt=''/>
                <p className={'mt-2'}>{item.product_description}</p>
            </Button>
     
            
        ); 
           
    });


    const List = newlist.sort((a, b) =>{
        let nameA = a.product_description;
        let nameB = b.product_description;

        if(nameA < nameB){
            return(-1);
        }
        if(nameA > nameB){
            return(1);
        }

        return 0;
    }).map((item) =>{

        return(
            
        <Button size='sm' color='secondary' className={' mt-1 mr-1'} onClick={() => toggle(item.product_description, 'bakery')}>
        <img  style={{backgroundSize: 'cover', display: 'inline-block', height:'150px', width: '150px'}} src={item.img_path} alt=''/>
            <p className={'mt-2'}>{item.product_description}</p>
        </Button>   
     
        ); 
           
    });

    return (
        <fragment >
          <MainBar />


< MessageModal toggle = {toggle}
                       toggleAdd= {toggleAdd}
                       productDescription={product}
                       modal={modal} 
                       noToggleAdd={noToggleAdd}
                       product={product}
                       />            

             <Row >
            
                 
                {
                <Col className={'col'} style={{display: 'flex', flexDirection: 'column'}} >
                     <Button color='secondary' className={'mr-1 mb-1 button-alphabet'} value='all' type='button' onClick={callAllItems }>All items</Button>

                    <Button color='secondary' className={'mb-1 button-alphabet'} value='abcde' type='button'onClick={(e) =>alphabeticCall(e)}>A - E</Button>
                    <Button color='secondary' className={'mb-1 button-alphabet'} value='fghil' type='button' onClick={(e) =>alphabeticCall(e)}>F - L</Button>
                    <Button color='secondary' className={'mb-1 button-alphabet'} value='mnropq' type='button' onClick={(e) =>alphabeticCall(e)}>M - Q</Button>
                    <Button color='secondary' className={'mb-1 button-alphabet '} value='rstuvz' type='button' onClick={(e) =>alphabeticCall(e)}>S- Z</Button>
                    <Button  tag={Link} to='/main' color='secondary' type='button' outline className={'mt-1 button-alphabet'}> Shopping</Button>

                </Col> }

                <Col className={'col-8'}> 
                <Container>
                <Row>
                    {listTrue === true ? List: produceList }
                
                    
                </Row>
                  
                </Container>
                </Col>

                <Col >
                <KeyboardAddQuantity     setValue={setValue}
                                         nums={nums}
                                         reset={reset}
                                         back={back}
                                         addQtyNumber={addQtyNumber}
                  />  
                </Col>
            </Row>

       

        </fragment>

    
    )
}

export default Bakery;
