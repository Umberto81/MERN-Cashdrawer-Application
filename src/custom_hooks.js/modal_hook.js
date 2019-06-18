import {useState, useEffect} from 'react';
import axios from 'axios';
import useFunctions from '../custom_hooks.js/hooks';

const useModal = () =>{

    const [modal, setModal] = useState(false);
    const [product, setProductDescription] = useState();
    const [url, setUrl] = useState('');
    const {setproductDetails, productDetails} = useFunctions();
    const [bakeryDetails, setBakeryDetails] = useState([]);
    console.log(productDetails);

    //shows bakery products in database
    useEffect(() =>{
    
        //request to fetch db products

    axios.get('http://localhost:4000/bakery')
    .then(response =>{
        //implementare il salvataggio in array
        setBakeryDetails(response.data);
    });
  
    }, []);

     //toggle for modal window
     const toggle = (product, url) => {

        setModal(!modal);
        setProductDescription(product);
        setUrl(url);
        

    }

    //add bakeryitem to shopping list in modal window
    const toggleAdd = () =>{
    
                axios.get('http://localhost:4000/' + url + '/' + product)
                .then(response => {
                    //const copy = [...productDetails];
                    console.log(product);
                    //console.log(copy);
                    productDetails.forEach(element => {
                        console.log(element.product_description);
                        if(element.product_description === response.data[0].product_description){
                            element.product_count++;
                            setproductDetails(productDetails);
                            setModal(!modal);
                
                        }else{
                            setproductDetails([...productDetails, ...response.data]);
                            setModal(!modal);
    
                });
            });
    
        
    

    }

    //Opposite modal call on DoNotAdd Button in modal window
    const noToggleAdd = () => {
       
        setModal(!modal);

    }

    return {
        toggleAdd, noToggleAdd, toggle, modal, setModal, url, setUrl, product, bakeryDetails
    }
}

export default useModal;