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
import { Provider } from './Components/Context'


class App extends Component {
    state = {
        items: [],
        cardId: "",
    };
      
    componentDidMout() {
        const cardId = this.props.history.location.state;
        console.log(cardId);
    }
    
    render() {
        return (
            <Provider value={this.state}>
                <div id="main_content">
                    <Router>
                        <Layout>
                            <Switch>
                                <Route exact path="/">
                                    <Card />
                                </Route>
                                <Route path="/info">
                                    
                                    <CardInfo  id={this.cardId} />
                                </Route>
                            </Switch>
                        </Layout>
                    </Router>
                </div>
            </Provider>
        );
    }
}

export default App;
