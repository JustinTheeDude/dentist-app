import React, {useEffect, useState} from 'react';
import { Route, Redirect } from 'react-router-dom';
import firebase from 'firebase';


export default ({ component: Component, ...rest }) => {

    const [authUser, setAuthUser] = useState({})

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if(user.emailVerified) {
                setAuthUser({authUser: true});
            }
        })
    }, []);

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