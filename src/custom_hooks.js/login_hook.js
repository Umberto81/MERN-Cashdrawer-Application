import {useState, useEffect} from 'react';
import axios from 'axios';
import useFunctions from '../custom_hooks.js/hooks';

const useLogin = (props) =>{
    const initialValue = JSON.parse(localStorage.getItem('logged' || 0));

    //chiarire il re-rendering.....
    const [logged, setLogged] = useState(initialValue);
    const [value, setvalue] = useState();

    useEffect(() => {

        localStorage.setItem('logged', JSON.stringify(logged));
    
      }, [logged]);
    
      //keyboards variables
    const [nums, setNums] = useState('');
console.log(nums);


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
 

  
    const handleChange = (e) =>{
        setvalue({
            ...value, [e.target.name]: e.target.value
        });
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
     
        axios.get('http://localhost:4000/login')
        .then(response =>{
            if(parseInt(nums) === response.data[0].password ){
                console.log('ffffffffffffff');
                setLogged(true);
                props.history.push('/main');
                              
            }
        }).catch(error => {
            console.log(error)
        });

      }

      const logout = () =>{
        setLogged(false);
       // console.log('logout');
      }

    return{

        handleChange, logged, value, handleSubmit, setLogged, logout,  setValue,
        reset,
        back,
        nums,
        
    }

}

export default useLogin;