// React imports
import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// CSS imports
import "bootstrap/dist/css/bootstrap.css";
import "./styles/main.scss";

// Component imports
import MainForm from "./Components/MainForm";
import Card from "./Components/Card";
import PrivateRoute from './PrivateRoute';
import Layout from "./Components/Layout";
import Login from "./Components/Login";
import Singup from './Components/Singup';
import Logout from './Components/Logout';

//import Provider
import AppProvider from "./Components/Context/AppProvider";
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
                            <Route path="/signup"> <Singup /> </Route>
                            <Layout>
                                <PrivateRoute path="/form/doctor"  component={MainForm} />
                                <PrivateRoute path="/cards" component={Card} />
                                <PrivateRoute path="/form/:page" component={MainForm} />
                                <PrivateRoute path="/form/:id/:page" component={MainForm} />
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