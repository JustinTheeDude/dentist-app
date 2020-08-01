import React, { Component } from "react";

import Maininfo from "./Components/MainInfo";
// import Calendar from "react-calendar";
// import DeliveryDate from "./Components/DeliveryDate";
import Card from "./Components/Card";
import "bootstrap/dist/css/bootstrap.css";
// import Header from './Components/Header';
import "./styles/main.scss";

import PrivateRoute from './PrivateRoute';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CardInfo from "./Components/CardInfo";
import Layout from "./Components/Layout";
import Login from "./Components/Login";
import DentistSingup from './Components/DentistSingup';
import TechSignup from './Components/TechSingup';
import Logout from './Components/Logout';
import Registration from './Components/Registration';
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
                            <Route path="/registration"> <Registration /> </Route>
                            <Route exact path="/dentist">
                                <DentistSingup/>
                            </Route>
                            <Route exact path="/technician">
                                <TechSignup />
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
                                <Route path="/signout"> <Logout /> </Route>
                            </Layout>
                        </Switch>
                    </Router>
                </AuthProvider>
            </AppProvider>
        );
    }
}

export default App;