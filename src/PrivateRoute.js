import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import firebase from 'firebase';


export default ({ component: Component, ...rest }) => {
  const authUser = firebase.auth().currentUser;
  return (

      <Route 
        {...rest}
        render={props =>{
          if(authUser) {
            return <Component {...props} />
          } else {
            return  <Redirect to={{
            pathname: "/",
            state: { from: props.location }
          }} />
          }
        }

        }
      />
  )
}