import React, { Component } from "react";
import MainInfo from "./Components/MainInfo";
// import Calendar from "react-calendar";
import DeliveryDate from "./Components/DeliveryDate";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from './Components/Header';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

class App extends Component {

    state = {
        startDate: new Date(),
        deliveryDate: "",
        minDate: new Date(),
        month: ""
    };

    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Route exact path="/home"  render={ () => <MainInfo /> } />
                    <DeliveryDate
                        startDate={this.state.startDate.toString().slice(0, 16)}
                        delivery={this.state.deliveryDate.toString().slice(0, 16)}
                    />
                </div>
            </Router>
        );
    }
}

export default App;


