import React, {Component} from "react";
import Header from "./Components/Header";
import Maininfo from "./Components/MainInfo";
import Calendar from "react-calendar";
import DeliveryDate from "./Components/DeliveryDate";
import Card from "./Components/Card";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
    state = {};

    render() {
        return (
            <div id="main_content">
                <Header />
                <Card />
                <Maininfo />
            </div>
        );
    }
}

export default App;