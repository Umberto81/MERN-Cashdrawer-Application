import {useState, useEffect} from 'react';
import axios from 'axios';
import {  useDispatch } from "react-redux";
import {setproductDetails} from '../actions/addProductDetails';

const useLogin = (props) =>{
    const initialValue = JSON.parse(localStorage.getItem('logged' || 0));

    //chiarire il re-rendering.....
    const [logged, setLogged] = useState(initialValue);
    const [value, setvalue] = useState();
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {

        localStorage.setItem('logged', JSON.stringify(logged));
    
      }, [logged]);
    
      //keyboards variables
    const [nums, setNums] = useState('');


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

    //handles the log in page with errors
    const handleSubmit = (e) =>{
        e.preventDefault();
    if(nums.length > 4){
        let pwdTooLong = 'password must be 4 digits long';
        setErrors(pwdTooLong);
        setNums('');
        return;

    }        
     
        axios.get('http://localhost:4000/login')
        .then(response =>{
            if(parseInt(nums) === response.data[0].password ){
                setLogged(true);
                props.history.push('/main');
            }else{
                let wrongPwd = 'wrong password';
                setErrors(wrongPwd);
                setNums('');

                return;
            }
        }).catch(error => {
            console.log(error)
        });

      }

      //logsout and delete the list
      const logout = () =>{
        dispatch(setproductDetails([]));

        setLogged(false);
       
      }

    return{

        handleChange, logged, value,
        handleSubmit, setLogged, logout,  
        setValue, reset, back,
        nums, errors
        
    }

}

export default useLogin;