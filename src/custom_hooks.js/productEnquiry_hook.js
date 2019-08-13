import {
    useState,
} from 'react';
import axios from 'axios';
import {addProductEnquiry} from '../actions/productAction';
import {  useDispatch } from "react-redux";

const useProduct = () => {
   
    //grabs the product types
    const dispatch = useDispatch();
 
    //keyboards variables
    const [nums, setNums] = useState('');
    //vars to trigger modal error in product enquiry component
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


     //request to fetch db products
  const requestProduct = () => {
    if (nums !== "") {
        axios.get('http://localhost:4000/products/' + nums)
        .then(response => {
            if(!Object.keys(response.data).length){
                setErrors('no product found');
                togglErerror();
                setNums('');
                return;
            }
        dispatch(addProductEnquiry(response.data));

        setNums('');

        }).catch(error => {
            console.log(error)
        });
    }

  }

    //toggle for modal window, add quantity to selection
    const togglErerror = () => {

        setModalError(!modalError);
    
    }

    return {
        setValue, reset, back,
        nums, requestProduct,  errors, 
        togglErerror, setModalError, 
        modalError
    }
}

export default useProduct;