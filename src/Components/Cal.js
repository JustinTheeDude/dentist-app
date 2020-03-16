import React, { Component } from "react";
import Calendar from "react-calendar";
import DeliveryDate from "./DeliveryDate";

class Cal extends Component {

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
                <DeliveryDate
                    className="delivery-div"
                    startDate={this.state.startDate.toString().slice(0, 16)}
                    delivery={this.state.deliveryDate.toString().slice(0, 16)}
                />
                <h3 className="calendar-heading">発注日/納期日</h3>
                <Calendar
                    className="main-cal"
                    calendarType="US"
                    onClickDay={this.onChange}
                    minDate={  this.state.minDate}
                    onClickMonth={this.showMonth}
                /> 
            </div>
      )
    }
}

export default Cal;