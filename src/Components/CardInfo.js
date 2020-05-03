import React, {Component} from "react";
import firebase from "firebase";
import {Redirect} from "react-router-dom";

class CardInfo extends Component {
    state = {
        address: "",
        age: "",
        contactName: "",
        day: "",
        doctorName: "",
        info: "",
        month: "",
        year: "",
        zip: "",
    };

    componentDidMount() {
        if (this.props.value != "") {
            var self = this;
            var ref = firebase
                .database()
                .ref("Form")
                .child(this.props.value);
            ref.orderByKey().on("value", function(snapshot) {
                let items = snapshot.val();
                for (let item in items) {
                    self.setState({
                        address: items["address"],
                        age: items["age"],
                        contactName: items["contactName"],
                        day: items["day"],
                        doctorName: items["doctorName"],
                        info: items["info"],
                        month: items["month"],
                        year: items["year"],
                        zip: items["zip"],
                    });
                }
            });
        }
    }

    render() {
        return (
            <div>
                {this.props.value ? (
                    <>
                        <h1>Address: {this.state.address}</h1>
                        <h1>Age: {this.state.age}</h1>
                        <h1>Contact: {this.state.contactName}</h1>
                        <h1>Day: {this.state.day}</h1>
                        <h1>Doctor name: {this.state.doctorName}</h1>
                        <h1>Info: {this.state.info}</h1>
                        <h1>Month: {this.state.month}</h1>
                        <h1>Year: {this.state.year}</h1>
                        <h1>Zip: {this.state.zip}</h1>
                    </>
                ) : (
                    <Redirect to="/cards" />
                )}
            </div>
        );
    }
}

export default CardInfo;
