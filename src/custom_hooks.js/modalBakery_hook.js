import {
    useState,
    useEffect
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

    //sets a new list to call the prducts based on alphabet
    const [newlist, setNewList] = useState([]);

    const [listTrue, setListTrue] = useState(false);

    //keyboards variables
    const [nums, setNums] = useState('');
    const [qty, setQty] = useState(1);



    //shows bakery products stored in database
    useEffect(() => {

        //request to fetch db products

        axios.get('http://localhost:4000/products/section/bakery')
            .then(response => {
                setBakeryDetails(response.data);
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




    //add bakeryitem to shopping list in modal window
    const toggleAdd = (product) => {

        axios.get('http://localhost:4000/' + url + '/' + product)
            .then(response => {
                let copy = [...productDetails];

                for (let i in copy) {
                    if (copy[i].product_description === response.data[0].product_description) {
                        copy[i].product_count += qty;
                        setproductDetails(copy);
                        setModal(!modal);
                        return;
                    }

                }

                // aggiornare la qty per fare in modo che alla prima chiamata sia mostrato il totale qty
                if(qty  > 1){

                 response.data[0].product_count += qty -1;
                 setproductDetails([...productDetails, ...response.data]);
                    setModal(!modal);
                    return;


               
                }else{
                    setproductDetails([...productDetails, ...response.data]);
                    setModal(!modal);
                }
                    
            
               

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
        let copy = [...bakeryDetails]
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
        axios.get('http://localhost:4000/bakery')
            .then(response => {
                //implementare il salvataggio in array
                setBakeryDetails(response.data);
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
        bakeryDetails,
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