import React from 'react'
import {
    Route,
    Redirect
  } from "react-router-dom";

  import {connect} from 'react-redux'


const  ProtectedRoute = ({ component: Component, ...rest }) => {

    const value = JSON.parse(localStorage.getItem('logged' || 0));

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
                  pathname: "/",
                  state: { from: props.location }
                }}
              />
            )
          }
        />
      );

   
  }

  const mapStatetoProps = state => ({
    logged: state.logged
  });

export default connect(mapStatetoProps)(ProtectedRoute);

