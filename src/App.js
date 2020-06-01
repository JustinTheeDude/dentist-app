import React, { Component } from "react";

import Maininfo from "./Components/MainInfo";
// import Calendar from "react-calendar";
// import DeliveryDate from "./Components/DeliveryDate";
import Card from "./Components/Card";
import "bootstrap/dist/css/bootstrap.css";
// import Header from './Components/Header';

import PrivateRoute from './PrivateRoute';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CardInfo from "./Components/CardInfo";
import Layout from "./Components/Layout";
import Login from "./Components/Login";
import UserSignUp from './Components/UserSignUp';
import Logout from './Components/Logout';
import Canvas from './Components/Canvas'

//import Provider
import AppProvider, { MyContext } from "./Components/Context/AppProvider";
import {AuthProvider} from "./Components/Context/Auth";

class App extends Component {
    state = {
        items: [],
        cardId: "",
    };

    render() {
        return (
            <AppProvider>
                <AuthProvider>
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
                                <Route path="/signout"> <Logout /></Route>
                                {/* <Route path="/canvas"> <Canvas /></Route> */}
                            </Layout>
                        </Switch>
                    </Router>
                </AuthProvider>
            </AppProvider>
        );
    }
}

export default App;