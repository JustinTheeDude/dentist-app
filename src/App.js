// React imports
import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// CSS imports
import "bootstrap/dist/css/bootstrap.css";
import "./styles/main.scss";

// Component imports
import Maininfo from "./Components/MainInfo";
import EditForm from './Components/EditForm';
import Card from "./Components/Card";
import PrivateRoute from './PrivateRoute';
import Layout from "./Components/Layout";
import Login from "./Components/Login";
import DentistSingup from './Components/DentistSingup';
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
                            <Route path="/signup"> <DentistSingup /> </Route>
                            {/* <Route exact path="/dentist">
                                <DentistSingup/>
                            </Route> */}
                            {/* <Route exact path="/technician">
                                <TechSignup />
                            </Route> */}
                            <Layout>
                                <PrivateRoute path="/cards" component={Card} />
                                <PrivateRoute path="/form"  component={Maininfo} />
                                <PrivateRoute path="/form/:id/update" component={EditForm} />
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