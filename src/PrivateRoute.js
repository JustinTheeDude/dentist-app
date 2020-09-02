import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {AuthContext} from "./Components/Context/Auth";


export default ({ component: Component, ...rest }) => {
 

    const {currentUser} = useContext(AuthContext);
    return (
        <Route
            {...rest}
                render={ props =>
                    !!currentUser ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to={{ pathname: "/", state: { from: props.location }}} />
                    )
                }
            />
    );
};