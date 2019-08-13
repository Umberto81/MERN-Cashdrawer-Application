import {
    useState,
    useEffect
} from 'react';
import axios from 'axios';
import useFunctions from './hooks';
import {setproductDetails} from '../actions/addProductDetails';
import { useSelector} from 'react-redux';
import {  useDispatch } from "react-redux";

const useModal = () => {
    //triggers the modal window
    const [modal, setModal] = useState(false);
    const productDetails = useSelector(state => state.productsList.productDetails);
    const dispatch = useDispatch();

    //grabs the product types
    const [product, setProductDescription] = useState();

    //set the url to call the right product kind
    const [url, setUrl] = useState('');

    //sets the list based on the kind of product selectioned
    const [produceDetails, setProduceDetails] = useState([]);

    //sets a new list to call the prducts based on alphabet
    const [newlist, setNewList] = useState([]);

    const [listTrue, setListTrue] = useState(false);

    //keyboards variables
    const [nums, setNums] = useState('');
    const [qty, setQty] = useState(1);



    //shows produce products stored in database
    useEffect(() => {

        //request to fetch db products

        axios.get('http://localhost:4000/products/section/produce')
            .then(response => {
                dispatch(setProduceDetails(response.data));
            });

    }, []);

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




    //add produceitem to shopping list in modal window
    const toggleAdd = (product) => {

        axios.get('http://localhost:4000/products/description/'  + product)
            .then(response => {
                let copy = [...productDetails];

                for (let i in copy) {
                    if (copy[i].product_description === response.data[0].product_description) {
                        copy[i].product_count += qty;
                        dispatch(setproductDetails(copy));
                        setModal(!modal);
                        return;
                    }

                }

                // aggiornare la qty per fare in modo che alla prima chiamata sia mostrato il totale qty
                if(qty  > 1){

                 response.data[0].product_count += qty -1;
                 dispatch(setproductDetails([...productDetails, ...response.data]));
                    setModal(!modal);
                    return;


               
                }else{
                    dispatch(setproductDetails([...productDetails, ...response.data]));
                    setModal(!modal);
                }
                    
            
               

            }).catch(error => {
                console.log(error)
            });


    }


    //Opposite modal call on DoNotAdd Button in modal window
    const noToggleAdd = () => {

        setModal(!modal);

    }

    //adds only the requeeted alphabetical items
    const alphabeticCall = (e) =>{
        let str = e.target.value.split("");
        let list = [];
        let copy = [...produceDetails]
        for(let i in copy){
            for(let j in str){
                if(copy[i].product_description.startsWith(str[j])){
                    list.push(copy[i]);
                }
                
            }
        }
        setNewList(list);
        setListTrue(true);
        
    }

    const callAllItems = () =>{
        axios.get('http://localhost:4000/products/section/produce')
            .then(response => {
                //implementare il salvataggio in array
                dispatch(setProduceDetails(response.data));
            }).catch(error => {
                console.log(error)
            });
            setListTrue(false);

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
        produceDetails,
        setValue,
        reset,
        back,
        nums,
        alphabeticCall,
        newlist,
        listTrue,
        callAllItems
    }
}

export default useModal;