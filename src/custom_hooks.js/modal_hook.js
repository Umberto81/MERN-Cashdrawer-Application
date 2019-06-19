import {useState, useEffect} from 'react';
import axios from 'axios';
import useFunctions from '../custom_hooks.js/hooks';

const useModal = () =>{

    const [modal, setModal] = useState(false);
    const [product, setProductDescription] = useState();
    const [url, setUrl] = useState('');
    const {setproductDetails, productDetails} = useFunctions();
    const [bakeryDetails, setBakeryDetails] = useState([]);
    const [nums, setNums] = useState('');
    const [qty, setQty] = useState(1);
    console.log(qty);



    //shows bakery products in database
    useEffect(() =>{
    
        //request to fetch db products

    axios.get('http://localhost:4000/bakery')
    .then(response =>{
        //implementare il salvataggio in array
        setBakeryDetails(response.data);
    });
  
    }, []);

      //set the state keyboard numbers
      const setValue = (e) =>{
        
        setNums(nums + e.target.value);
      }

      //resets all the numbers into the text area
     const reset = () =>{
       
        setNums('');
  }

    //delete only the last number into the text area
     const  back = () =>{

      setNums(nums.substr(0, nums.length-1));
  }

  const addQtyNumber = () =>{
    setQty(parseInt(nums));
    setNums('');
  }

     

     //toggle for modal window
     const toggle = (product, url) => {

        setModal(!modal);
        setProductDescription(product);
        setUrl(url);
        

    }

  


        //add bakeryitem to shopping list in modal window
        const toggleAdd = (product) =>{
    
            axios.get('http://localhost:4000/' + url + '/' + product)
                .then(response => {
                    let copy = [...productDetails];

                    for(let i in copy){
                        if(copy[i].product_description === response.data[0].product_description){
                            console.log('hhhhhhhhhhhhhhhhhh');
                            copy[i].product_count += qty;
                            console.log(copy);
                            setproductDetails(copy);
                            setModal(!modal);
                            return;
                        }
                        
                        
                    }
                    setproductDetails([...productDetails, ...response.data]);
                    setModal(!modal);
                
                    });

    
        } 


    // const toggleAdd = (product) =>{
    //     for(let i in productDetails){
    //         if(productDetails[i].product_description === product){
    //             console.log('uguale');
    //         }else{
    //             console.log('diverso');
    //         }
    //     }
    // }
        
    //Opposite modal call on DoNotAdd Button in modal window
    const noToggleAdd = () => {
       
        setModal(!modal);

    }

    return {
        toggleAdd, noToggleAdd, toggle, modal, setModal,
         url, setUrl, product, bakeryDetails, setValue, 
         reset, back, nums, addQtyNumber
    }
}

export default useModal;