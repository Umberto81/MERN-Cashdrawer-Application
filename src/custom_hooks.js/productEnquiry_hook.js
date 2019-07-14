import {
    useState,
} from 'react';
import axios from 'axios';
import useFunctions from './hooks';

const useModal = () => {
    //triggers the modal window
    const [modal, setModal] = useState(false);
    
    //grabs the product types
    const [product, setProductDescription] = useState();

    //set the url to call the right product kind
    const [url, setUrl] = useState('');

    const {
        setproductDetails,
        productDetails
    } = useFunctions();

    //sets the list based on the kind of product selectioned
    const [bakeryDetails, setBakeryDetails] = useState([]);

 
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




    //toggle for modal window, add quantity to selection
    const toggle = (product, url) => {

        setModal(!modal);
        setProductDescription(product);
        setUrl(url);
        setQty(parseInt(nums));
        setNums('');

    }




    //add bakeryitem to shopping list in modal window
    const toggleAdd = (product) => {

        //axios call


    }


    //Opposite modal call on DoNotAdd Button in modal window
    const noToggleAdd = () => {

        setModal(!modal);

    }

    
    return {
        toggleAdd,
        noToggleAdd,
        toggle,
        modal,
        setModal,
        url,
        setUrl,
        product,
        bakeryDetails,
        setValue,
        reset,
        back,
        nums,
      
    }
}

export default useModal;