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
    };

    onChange = deliveryDate => {
        this.setState({deliveryDate});
        console.log(this.state.deliveryDate);
    };

    render() {
        return (
            <div>
                <Header />
                <MainInfo />
                <h3 className="order-heading">発注日/納期日</h3>
                <Calendar
                    selectRange={true}
                    calendarType="US"
                    // activeStartDate={today => console.log(today)}
                    onClickDay={this.onChange}
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