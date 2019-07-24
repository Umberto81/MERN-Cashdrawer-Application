import {
    useState,
} from 'react';
import axios from 'axios';
import {addProductEnquiry} from '../actions/productAction';
import {  useDispatch } from "react-redux";

const useProduct = () => {
   
    //grabs the product types
    const [product, setProduct] = useState();
    const dispatch = useDispatch();
 
    //keyboards variables
    const [nums, setNums] = useState('');
    const [qty, setQty] = useState(1);



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


     //request to fetch db products
  const requestProduct = () => {
    if (nums !== "") {
        axios.get('http://localhost:4000/products/' + nums)
        .then(response => {
          
        dispatch(addProductEnquiry(response.data));

        setNums('');

        });



     

    }

  }

    
    return {
        setValue,
        reset,
        back,
        nums,
        requestProduct
    }
}

export default useProduct;