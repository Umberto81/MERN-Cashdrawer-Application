
import {useState, useEffect} from 'react';
import {finalSubTotal} from '../actions/totalActions';
import {  useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
import { calculatedChange} from '../actions/totalActions';
import useFunctions from '../custom_hooks.js/hooks';
import {removeDiscount} from '../actions/discountAction';

const useSubTotal = () =>{

    const total = useSelector(state => state.products.total);
    const dispatch = useDispatch();
    const [numsTotal, setNums] = useState('');
    const { clearList } = useFunctions('');

    //triggers the modal window
    const [modal, setModal] = useState(false);

      //set the state keyboard numbers
     const setValueTotal = (e) => {

      setNums(numsTotal + e.target.value);
  }

  //resets all the numbers into the text area
  const  resetTotal = () => {

    setNums('');
  }

  //delete only the last number into the text area
  const backTotal = () => {

    setNums(numsTotal.substr(0, numsTotal.length - 1));
  }


  //set the subtotal buttons value
  const setSubtotal = (e) => {
    
    let finalTotal = parseFloat(e.target.value) - parseFloat(total);
    dispatch(finalSubTotal(finalTotal));
    dispatch(removeDiscount());

    toggle();

  }

  //toggle for modal window, add quantity to selection
  const toggle = () => {

    setModal(!modal);

}

  //calculates the amount of change due after transaction
  const calculateChange = () =>{

    let finalTotal = parseFloat(numsTotal) - parseFloat(total);

    dispatch(calculatedChange(finalTotal));
    dispatch(removeDiscount());
    toggle();
  }

  const resetAfterTotal = () =>{
    setModal(!modal);
    clearList();

  }

  return{
      setSubtotal, toggle, modal, 
      setValueTotal, numsTotal, resetTotal, 
      backTotal, calculateChange, resetAfterTotal
  }

}

export default useSubTotal;
