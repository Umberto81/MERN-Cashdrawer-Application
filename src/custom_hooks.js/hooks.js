import {
  useState,
  useEffect
} from 'react';
import axios from 'axios';


const useFunctions = () => {

  const initialValue = JSON.parse(localStorage.getItem('list' || 0));

  const [nums, setNums] = useState('');
  const [productDetails, setproductDetails] = useState(initialValue);
  console.log(nums);

  //keeps persistent localstorage database
  useEffect(() => {

    localStorage.setItem('list', JSON.stringify(productDetails));

  }, [productDetails]);



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
          //implementare il salvataggio in array
          setproductDetails([...productDetails, ...response.data]);
          setNums('');

        });
    }



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
  }

}

export default useFunctions;