import {useState, useEffect} from 'react';
import axios from 'axios';

const useLogin = (initialState, props) =>{
    const initialValue = JSON.parse(localStorage.getItem('logged' || 0));

    //chiarire il re-rendering.....
    const [logged, setLogged] = useState(initialValue);
    const [details, setDetails] = useState();
    const [value, setvalue] = useState(initialState);



    useEffect(() => {

        localStorage.setItem('logged', JSON.stringify(logged));
    
      }, [logged]);
    
 

  
    const handleChange = (e) =>{
        setvalue({
            ...value, [e.target.name]: e.target.value
        });
        
    }

    const handleSubmit = (e, props, cb) =>{
        e.preventDefault();
     
        axios.get('http://localhost:4000/login')
        .then(response =>{
            //console.log(response.data);
            if(value.password === response.data[0].password && value.username === response.data[0].userName){
                setLogged(true);
                props.history.push('/main');

                console.log('press')
             
                 
            }
        })

        
      }

      const logout = () =>{
        setLogged(false);
        localStorage.setItem('logged', logged);
        console.log('logout');
      }

    return{

        handleChange, logged, value, handleSubmit, setLogged, logout
    }

}

export default useLogin;