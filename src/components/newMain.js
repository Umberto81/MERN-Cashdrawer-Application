
import React, {useState} from 'react';
import Keyboard from './keyboard';
import {Container, Row, Col} from 'reactstrap';
import MainBar from './mainBar';
import TableList from './TableList';
import axios from 'axios';

export  const Main = () => {

        const [nums, setNums] = useState('');
        const [productDetails, setproductDetails] = useState('');
  


    //set the state keyboard numbers
    const setValue = (e) =>{
        
        setNums(e.target.value);
      }

    //resets all the numbers into the text area
     const reset = () =>{
       
          setNums('');
    }

      //delete only the last number into the text area
   const  back = () =>{
        //  let copy = [...this.state.nums];
        //  const newNums = copy.splice(0, copy.length-1);
        //     this.setState({
        //         nums: newNums
        //     });

        setNums(nums.substr(nums.length-1, 0));
    }

    //request to fetch db products
     const request = () =>{
  
        axios.get('http://localhost:4000/products/' + this.state.nums)
        .then(response =>{
            //implementare il salvataggio in array
            let productJoin = this.state.productDetails.concat(response.data);
            this.setState({
              productDetails: productJoin,
              nums: ''
            });
        });
    }

    const deleteProduct = (id) =>{
      let copy = [...this.state.productDetails];
      for(let i = 0; i < copy.length; i++){
        if(i === id){
          copy.splice(i, 1);
          this.setState({
            productDetails: copy
          });
        }
      }
      console.log('click');
    }
    

    return (
      <Container>
      <MainBar />
      <Row>
          <Col >
              <TableList productsDetails={this.state.productDetails}
                         deleteProduct={this.deleteProduct}
              />
          </Col>
          <Col></Col>
      </Row>

      <Row>
          <Col></Col>
          <Col>
              <Row>
                  <Col></Col>
                  <Col></Col>

                  <Col>
                  <Keyboard setNums={setNums}
                            nums={nums}
                            reset={reset}
                            back={back}
                            request={request}
                  />  
                  </Col>
              </Row>
          </Col>

      </Row>

          
  </Container>
    )
  
}
