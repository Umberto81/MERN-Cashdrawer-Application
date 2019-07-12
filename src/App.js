import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './components/main';
import ProductEnquiry from './components/productEnquiry';
import Bakery from './components/bakery';
import Produce from './components/produce';
import ManagerFunctions from './components/managerFunctions';
import Login from './components/login'
import ProtectedRoute from './components/protectedRoute';



function App() {

  return (
      <div className="App px-4">
        
        <Router>
          <Switch>

          <ProtectedRoute path="/main" component={Main}/>
          <Route path='/' exact component={Login}/>
          <Route path='/productEnquiry' component={ProductEnquiry}/>
          <ProtectedRoute path='/bakery' component={Bakery}/>
          <ProtectedRoute path='/produce' component={Produce}/>
          <ProtectedRoute path='/managerFunctions' component={ManagerFunctions}/>
          <Route path='*' component={() => "404 NOT FOUND"}/>
          </Switch>
        </Router>
    
    </div>

    
    
  );

  
}


export default App;
