import React from 'react'
import {
    Route,
    Redirect,
  } from "react-router-dom";
  import useLogin from '../custom_hooks.js/login_hook';


const  ProtectedRoute = ({ component: Component, ...rest }) => {

    const value = JSON.parse(localStorage.getItem('logged' || 0));

  //   const {
  //     logged
  //  } = useLogin(); 
 
      return (
        <Route
          {...rest}
          render={props =>
          //implementare variabile di login
          value ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location }
                }}
              />
            )
          }
        />
      );

   
  }

export default ProtectedRoute;

