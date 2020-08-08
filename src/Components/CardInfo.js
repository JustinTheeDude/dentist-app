import React, {Component} from "react";
import firebase from "firebase";
// import {Redirect} from "react-router-dom";
// import Mouth from "./mouth";
import {MyContext} from "./Context/AppProvider";
// import {Button} from "reactstrap";
// import CanvasDraw from "react-canvas-draw";
import mouth from '../assets/mouth.png';
import PDF from "../Components/InfoPDF";

class CardInfo extends Component {
    state = {
        address: "",
        age: "",
        contactName: "", day: "",
        doctorName: "",
        info: "",
        month: "",
        mainComplaint: "",
        year: "",
        zip: "",
        complete: false,
    };

    /**
     * Function gets drawing stored as a string and returns the string
     */
    getDrawing() {
        const user = firebase.auth().currentUser
        const ref = firebase.database().ref(`Dentist/${user.uid}/Form`)
        let drawing;
        ref.orderByChild("drawing").on("child_added", function(snap) {
          drawing = snap.val().drawing;

        })
        return  drawing;
    }

    completeOrder = (id) => {
        const itemsRef = firebase.database().ref("Form").child(id);
        itemsRef.once("value", (snapshot) => {
            console.log(snapshot.child("complete").val());
            if(snapshot.child("complete").val()) {
                itemsRef.update({complete: false});
                this.setState({complete: false});
            } else {
                itemsRef.update({complete: true});
                this.setState({complete: true});
            }
        });
    }

    componentDidMount() {
        if (this.props.value !== "") {
            var self = this;
            const user = firebase.auth().currentUser;
            console.log(user.uid);
            var ref = firebase
                .database()
                .ref(`Dentist/${user.uid}/Form`)
                .child(this.props.value);
            ref.orderByKey().on("value", function(snapshot) {
                let items = snapshot.val();
                self.setState({
                    doctorName: items["doctorName"],
                    address: items["address"],
                    zip: items["zip"],
                    contactName: items["contactName"],
                    year: items["year"],
                    month: items["month"],
                    day: items["day"],
                    age: items["age"],
                    gender: items["gender"],
                    specs: items["specs"],
                    paymentType: items["paymentType"],
                    mainComplaint: items["mainComplaint"],
                    deliverTime: items["deliveryTime"],
                    otherOption: items["otherOption"],
                    complete: items["complete"]
                });
            });
        }
    }

    isComplete = "";

    completeOrder = (id) => {
        const itemsRef = firebase.database().ref("Form").child(id);
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
                            <h1>歯科医名: {this.state.doctorName}</h1>
                            <h1>住所: {this.state.address}</h1>
                            <h1>郵便番号: {this.state.zip}</h1>
                            <h1>患者名: {this.state.contactName}</h1>
                            <h1>年齢: {this.state.age}</h1>
                            <h1>性別: {this.state.gender}</h1>
                            {!this.state.otherOption && <h1>製品仕様: {this.state.specs}</h1>}
                            {this.state.otherOption && <h1>製品仕様 他: {this.state.otherOption}</h1>}
                            <h1>支払い: {this.state.paymentType}</h1>
                            <h1>主訴: {this.state.mainComplaint}</h1>
                            <h1>日付: {this.state.day}</h1>
                            <h1>月: {this.state.month}</h1>
                            <h1>年: {this.state.year}</h1>
                            <h1>時間: {this.state.deliverTime}</h1>
                        </div>
                        <div className="teeth">
                            <img src={mouth} alt="mouth diagram" />
                            {/* <Mouth preserveAspectRatio="meet" /> */}
                            {/* <CanvasDraw
                                saveData={this.getDrawing()}
                                imgSrc={mouth}
                            /> */}
                        </div>
                        {/* <Button onClick={() => {this.completeOrder(this.props.value)}}></Button> */}
                        <PDF name={this.state.doctorName}
                             address={this.state.address}
                             zip={this.state.zip}
                             contactName={this.state.contactName}
                             age={this.state.age}
                             gender={this.state.gender}
                             paymentType={this.state.paymentType}
                             mainComplaint={this.state.mainComplaint}
                             day={this.state.day}
                             month={this.state.month}
                             year={this.state.year}
                             filename={this.state.contactName}
                        />
                    </div>
                )}
            </MyContext.Consumer>
        );
    }
}

export default CardInfo;
