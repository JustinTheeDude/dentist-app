import React, { Component } from "react";
import MainInfo from "./Components/MainInfo";
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

    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Route exact path="/"  render={ () => <MainInfo /> } />

                </div>
            </Router>
        );
    }
}

export default App;


