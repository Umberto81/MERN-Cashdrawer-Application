import {
  useState,
  useEffect
} from 'react';
import axios from 'axios';
import useLogin from '../custom_hooks.js/login_hook'
import {  useDispatch } from "react-redux";
import { applyDiscount } from '../actions/discountAction';
import { zeroTotal } from '../actions/totalActions';


const useFunctions = () => {

  const initialValue = JSON.parse(localStorage.getItem('list' || 0));

  const [nums, setNums] = useState('');
  const [productDetails, setproductDetails] = useState(initialValue);
  const [member, setMember] = useState(false);

  const dispatch = useDispatch();

  const { logged } = useLogin();

  //keeps persistent localstorage database
  useEffect(() => {

    localStorage.setItem('list', JSON.stringify(productDetails));

  }, [productDetails, logged]);

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
    setproductDetails([]);
    dispatch(zeroTotal());
  }


  //add carrier bag to shopping list

  const addCarrierBag = () => {

    let productJoin = [...productDetails, {
      product_description: 'carrierBag',
      product_price: 0.50,
      product_count: 1
    }];
    setproductDetails(productJoin);
   


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
          setproductDetails([...productDetails, ...response.data]);
          setNums('');

        }).catch(error => {
          console.log(error.response)
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
        setproductDetails(copy);
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
    setproductDetails,
    discount, member, setMember
  }

}

export default useFunctions;