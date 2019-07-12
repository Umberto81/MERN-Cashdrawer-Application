import {useState} from 'react'

const  useProductEnquiry = (initilaState) => {

    const [value, setvalue] = useState(initilaState);
  
    const handleChange = (e) =>{
        setvalue({
            ...value, [e.target.name]: e.target.value
        });
        
    }

    //checks if only numbers are inserted into the input field
    const numValidator = (value) =>{
        let num = /^[0-9]+$/;
        if(value.match(num)){
            return true;
        }
    }

    const handleSubmit = () =>{
        
        if(numValidator(value.productCode)){
            console.log('ok');
        }else{
            console.log('nooooooooooooo');
        }
       
     
    }

    return {
        handleChange, value, handleSubmit
    }
}

export default useProductEnquiry;
