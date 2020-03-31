import React, {Component} from "react";
import Header from "./Components/Header";
import Maininfo from "./Components/MainInfo";
// import Calendar from "react-calendar";
// import DeliveryDate from "./Components/DeliveryDate";
import Card from "./Components/Card";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/css/main.css";
// import Header from './Components/Header';
//
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CardInfo from "./Components/CardInfo";
import Layout from "./Components/Layout";

//impor Provider
import AppProvider, {MyContext} from "./Components/Context/AppProvider";

class App extends Component {
    state = {
        items: [],
        cardId: "",
    };

    render() {
        return (
            <AppProvider>
                <div id="main_content">
                    <Router>
                        <Layout>
                            <Switch>
                                <Route exact path="/">
                                    <Card />
                                </Route>
                                <Route path="/info">
                                    <MyContext.Consumer>
                                        {context => <CardInfo value={context.state.chosenCard} />}
                                    </MyContext.Consumer>
                                </Route>
                            </Switch>
                        </Layout>
                    </Router>
                </div>
            </AppProvider>
        );
    }
}

export default App;
