import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Consumer, MyContext } from './Components/Context/AppProvider';

export default ({ component: Component, ...rest }) => {
  return (
    <Consumer>
        { MyContext => (
          <Route 
            {...rest}
            rener={props => MyContext.authenticatedUser ? (
              <Component {...props} />
            ): (
              <Redirect to={{
                pathname: "/signin",
                state: { from: props.location }
              }} />
            )
            }
          />
        )}
    </Consumer>
  )
}