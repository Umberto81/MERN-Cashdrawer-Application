import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './components/main';
import PriceEnquiry from './components/priceEnquiry';
import Bakery from './components/bakery';
import Produce from './components/produce';
import ManagerFunctions from './components/managerFunctions';

function App() {


  
  return (
      <div className="App px-4">
        
        <Router>

        <Route path='/' exact component={Main}/>
        <Route path='/priceEnquiry/:id' component={PriceEnquiry}/>
        <Route path='/bakery' component={Bakery}/>
        <Route path='/produce' component={Produce}/>
        <Route path='/managerFunctions' component={ManagerFunctions}/>

        </Router>
    
    </div>

    
    
  );

  
}


export default App;
