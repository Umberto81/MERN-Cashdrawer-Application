import { useState, useEffect } from 'react';
import axios from 'axios';
import {  useDispatch } from "react-redux";
import { applyDiscount } from '../actions/discountAction';
import { zeroTotal } from '../actions/totalActions';
import { useSelector} from 'react-redux';
import {setproductDetails} from '../actions/addProductDetails';

const useFunctions = () => {

  const productDetails = useSelector(state => state.productsList.productDetails);
  const dispatch = useDispatch();

  const [nums, setNums] = useState('');
  //const [productDetails, setproductDetails] = useState(details);
  const [member, setMember] = useState(false);


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
        product_price: 0.50,
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
    discount, member, setMember
  }

}

export default useFunctions;