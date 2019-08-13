import { useState } from 'react';
import axios from 'axios';
import {  useDispatch } from "react-redux";
import { applyDiscount } from '../actions/discountAction';
import { zeroTotal } from '../actions/totalActions';
import { useSelector} from 'react-redux';
import {setproductDetails} from '../actions/addProductDetails';

const useFunctions = () => {

  //THIS VALUE COMES FROM REDUX STORE
  const productDetails = useSelector(state => state.productsList.productDetails);
  const dispatch = useDispatch();

  const [nums, setNums] = useState('');
  const [member, setMember] = useState(false);

  //vars to set Modal errors in main component
  const [errors, setErrors] = useState('');

   //triggers the modal window
   const [modalError, setModalError] = useState(false);
  //set the state keyboard numbers
  const setValue = (e) => {

    setNums(nums + e.target.value);
  }

  //resets all the numbers into the text area
  const reset = () => {

    setNums('');
  }

  //delete only the last number into the text area
  const back = () => {

    setNums(nums.substr(0, nums.length - 1));
  }



  /*
   * 
   *clear button to clear the shopping list 
   */

  const clearList = () => {
    dispatch(setproductDetails([]));
    dispatch(zeroTotal());
  
  }


  //add carrier bag to shopping list

  const addCarrierBag = () => {

    let productJoin = [...productDetails, {
        product_description: 'carrierBag',
        product_price: '0.50',
        product_count: 1
    }];

    dispatch(setproductDetails(productJoin));
   
  }

  /************
   * 
   * 
   * axios products
   * 
   * 
   ************/

  //request to fetch db products
  const requestProducts = () => {
    if (nums !== "") {
      axios.get('http://localhost:4000/products/' + nums)
        .then(response => {
          if(!Object.keys(response.data).length){
            setErrors('no product found');
            togglErerror();
            setNums('');
            return;
        }
          dispatch(setproductDetails([...productDetails, ...response.data]));
          let audioBeep = new Audio('../audio/beep.mp3');
          audioBeep.play();
          setNums('');

        }).catch(error => {
          console.log(error)
      });
    }

  }

  //card discount function
  const discount = () =>{
    dispatch(applyDiscount());
  }

  //deletes the product
  const deleteProduct = (id) => {
    let copy = [...productDetails];
    for (let i = 0; i < copy.length; i++) {
      if (i === id) {
        copy.splice(i, 1);
        dispatch(setproductDetails(copy));
        localStorage.setItem('list', JSON.stringify(productDetails));

      }
    }
  }
  //toggle for modal window, add quantity to selection
  const togglErerror = () => {

    setModalError(!modalError);

}



  return {
    setValue,
    reset,
    back,
    nums,
    setNums,
    requestProducts,
    deleteProduct,
    productDetails,
    clearList,
    addCarrierBag,
    discount, member, setMember,
    errors, togglErerror, setModalError, 
    modalError
  }

}

export default useFunctions;