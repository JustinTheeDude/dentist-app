import React, {Component} from "react";
import firebase from "firebase";
// import {Redirect} from "react-router-dom";
import Mouth from "./mouth";
import {MyContext} from "./Context/AppProvider";
import {Button} from "reactstrap";

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
        if (this.props.value !== "") {
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

    // {this.props.value ? (
    // ) : (
    //     <Redirect to="/cards" />
    // )}
    //
    //

    isComplete = "";

    completeOrder = (id) => {
        const itemsRef = firebase.database().ref("Form").child(id);
        console.log(itemsRef);
        itemsRef.once("value", (snapshot) => {
            snapshot.forEach((child) => {
                if(child.key === "complete") {
                    if(child.node_.value_ === true) {
                        itemsRef.update({"complete": false})
                        this.isComplete = "Not Complete";
                    } else {
                        itemsRef.update({"complete": true})
                        this.isComplete = "Complete";
                    }
                }
            });
        });
    }


    render() {
        return (
            <MyContext.Consumer>
                {context => (
                    <div className="order-container">
                        <div className="order-info">
                            <h1>住所: {this.state.address}</h1>
                            <h1>年齢: {this.state.age}</h1>
                            <h1>患者名: {this.state.contactName}</h1>
                            <h1>日付: {this.state.day}</h1>
                            <h1>歯科医名: {this.state.doctorName}</h1>
                            <h1>説明: {this.state.info}</h1>
                            <h1>月: {this.state.month}</h1>
                            <h1>年: {this.state.year}</h1>
                            <h1>郵便番号: {this.state.zip}</h1>
                        </div>
                        <div className="teeth">
                            <Mouth preserveAspectRatio="meet" />
                        </div>
                        <Button onClick={() => this.completeOrder(this.props.value)}>{this.isComplete}</Button>
                    </div>
                )}
            </MyContext.Consumer>
        );
    }
}

export default CardInfo;
