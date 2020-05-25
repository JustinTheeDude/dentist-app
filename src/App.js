import React, { Component } from "react";

<<<<<<< HEAD
/**
 * Component Imports
 */
import Header from "./Components/Header";
=======
>>>>>>> e7112c7998e751572ae42371a2727fa09d3ddd24
import Maininfo from "./Components/MainInfo";
import Card from "./Components/Card";
import Login from "./Components/Login";

/**
 * styles Imports
 */
import "bootstrap/dist/css/bootstrap.css";
<<<<<<< HEAD
import "./styles/css/main.css";

// Routing imports

import { BrowserRouter,
         Route,
        //  Switch,
} from 'react-router-dom';
=======
// import Header from './Components/Header';
>>>>>>> e7112c7998e751572ae42371a2727fa09d3ddd24

import PrivateRoute from './PrivateRoute';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CardInfo from "./Components/CardInfo";
import Layout from "./Components/Layout";
import Login from "./Components/Login";
import UserSignUp from './Components/UserSignUp';
import Logout from './Components/Logout';
//import Provider
import AppProvider, { MyContext } from "./Components/Context/AppProvider";

class App extends Component {
    state = {
        items: [],
        cardId: "",
    };

    render() {
        return (
<<<<<<< HEAD
            <BrowserRouter>
                <Route>
                    <div id="main_content">
                        <Header />
                        <Route exact path='/' component={Login} />
                        <Route 
                            exact path="/form"
                            render={ () => <Maininfo /> }
                        />
                        <Route 
                            exact path="/cards"
                            render={ () => <Card /> } 
                         />
                    </div>
                </Route>
            </BrowserRouter>
=======
            <AppProvider>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Login />
                        </Route>
                        <Route exact path="/signup">
                            <UserSignUp />
                        </Route>
                        <Layout>
                            <PrivateRoute path="/cards" component={Card} />
                            <PrivateRoute path="/form"  component={Maininfo} />
                            {/* <PrivateRoute path="/info" component={ <MyContext.Consumer>
                                    {context => <CardInfo value={context.state.chosenCard} />}
                                </MyContext.Consumer>} /> */}
                            {/* <Route path="/form">
                                <Maininfo />
                            </Route> */}
                            <Route path="/info">
                                <MyContext.Consumer>
                                    {context => <CardInfo value={context.state.chosenCard} />}
                                </MyContext.Consumer>
                            </Route>
                            <Route path="/signout"> <Logout /> </Route>
                        </Layout>
                    </Switch>
                </Router>
            </AppProvider>
>>>>>>> e7112c7998e751572ae42371a2727fa09d3ddd24
        );
    }
}

export default App;