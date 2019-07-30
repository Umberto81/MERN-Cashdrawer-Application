
import {finalSubTotal} from '../actions/totalActions';
import {  useDispatch } from "react-redux";
import { useSelector } from 'react-redux'

const useSubTotal = () =>{

    const total = useSelector(state => state.total);
    const dispatch = useDispatch();


  //set the subtotal buttons value
  const setSubtotal = (e) => {

    let finalTotal = parseFloat(e.target.value) - parseFloat(total);
    dispatch(finalSubTotal(finalTotal));
  }

  return{
      setSubtotal
  }


}

export default useSubTotal;
