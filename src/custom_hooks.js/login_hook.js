import React, {useState} from 'react';
import axios from 'axios';

const useLogin = (initialState) =>{

    const [logged, setLogged] = useState(false);
    console.log(logged);
    const [value, setvalue] = useState(initialState);

    const handleChange = (e) =>{
        setvalue({
            ...value, [e.target.name]: e.target.value
        });
        
    }

    const handleSubmit = (e) =>{
        
        axios.get('http://localhost:4000/login')
        .then(response =>{
            //console.log(response.data);
            if(value.password === response.data[0].password && value.username === response.data[0].userName){
                setLogged(true);
                console.log('done');
                 
            }
        })
      }

    return{

        handleChange, logged, value, handleSubmit
    }

}

export default useLogin;