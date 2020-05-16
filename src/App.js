import React, { Component } from "react";

import Maininfo from "./Components/MainInfo";
// import Calendar from "react-calendar";
// import DeliveryDate from "./Components/DeliveryDate";
import Card from "./Components/Card";
import "bootstrap/dist/css/bootstrap.css";
// import Header from './Components/Header';

// import PrivateRoute from './PrivateRoute';

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
                            <Route path="/cards" component={Card} />
                            <Route path="/form">
                                <Maininfo />
                            </Route>
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
        );
    }
}

export default App;