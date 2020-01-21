import React, { Component } from "react";
import MainInfo from "./Components/MainInfo";
import Calendar from "react-calendar";
import DeliveryDate from "./Components/DeliveryDate";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from './Components/Header';


class App extends Component {

    state = {
        startDate: new Date(),
        deliveryDate: "",
        minDate: new Date(),
        month: ""
    };

    onChange = deliveryDate => {
        this.setState({deliveryDate});
        // console.log(this.state.deliveryDate);
    };
    

    render() {
        return (
            <div>
                <Header />
                <MainInfo />
                <h3 className="order-heading">発注日/納期日</h3>
                <Calendar
                    calendarType="US"
                    onClickDay={this.onChange}
                    minDate={  this.state.minDate}
                    onClickMonth={this.showMonth}
                />
                <DeliveryDate
                    startDate={this.state.startDate.toString().slice(0, 16)}
                    delivery={this.state.deliveryDate.toString().slice(0, 16)}
                />
            </div>
        );
    }
}

export default App;


