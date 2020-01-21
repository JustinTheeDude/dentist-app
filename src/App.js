import React, {Component} from "react";
import Header from "./Components/Header";
import MainInfo from "./Components/MainInfo";
import Calendar from "react-calendar";
import DeliveryDate from "./Components/DeliveryDate";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
    state = {
        date: new Date(),
        deliveryDate: "",
        minDate: new Date(),
    };

    onChange = deliveryDate => {
        this.setState({deliveryDate});
        console.log(this.state.deliveryDate);
    };

    render() {
        return (
            <div id="main_content">
                <Header />
                <MainInfo />
                <h3 className="order-heading">発注日/納期日</h3>
                <Calendar
                    calendarType="US"
                    // activeStartDate={today => console.log(today)}
                    onClickDay={this.onChange}
                    minDate={this.state.minDate}
                />
                <DeliveryDate
                    day={this.state.date.toString().slice(0, 16)}
                    delivery={this.state.deliveryDate.toString().slice(0, 16)}
                />
            </div>
        );
    }
}

export default App;

// this.value[0].toString().slice(0,16) this.value[1].toString().slice(0,16)