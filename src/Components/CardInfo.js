import React, {Component} from "react";
import firebase from "firebase";
import {MyContext} from "./Context/AppProvider";
import mouth from '../assets/mouth.png';
import PDF from "../Components/InfoPDF";
import chart from '../assets/420px-Ptnadult.svg.png';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class CardInfo extends Component {
    state = {
        address: "",
        age: "",
        patientName: "",
        patientID: "", 
        day: "",
        doctorName: "",
        info: "",
        month: "",
        mainComplaint: "",
        year: "",
        zip: "",
        specs: "",
        otherOption:"",
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
                    patientName: items["patientName"],
                    patientID: items["patientID"],
                    year: items["year"],
                    month: items["month"],
                    date: items["date"],
                    deliveryDate: items["deliveryDate"],
                    age: items["age"],
                    gender: items["gender"],
                    specs: items["specs"],
                    paymentType: items["paymentType"],
                    mainComplaint: items["mainComplaint"],
                    deliveryTime: items["deliveryTime"],
                    otherOption: items["otherOption"],
                    complete: items["complete"],
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
                            <h1>患者名: {this.state.patientName}</h1>
                            <h1>患者ID: {this.state.patientID}</h1>
                            <h1>年齢: {this.state.age}</h1>
                            <h1>性別: {this.state.gender}</h1>
                            {!this.state.otherOption && <h1>製品仕様: {this.state.specs}</h1>}
                            {this.state.otherOption && <h1>製品仕様 他: {this.state.otherOption}</h1>}
                            <h1>支払い: {this.state.paymentType}</h1>
                            <h1>主訴: {this.state.mainComplaint}</h1>
                            <h1>発注日: {this.state.date}</h1>
                            <h1>配送日: {this.state.deliveryDate}</h1>
                            <h1>時間: {this.state.deliveryTime}</h1>
                        </div>
                        <div className="teeth">
                            <img src={mouth} alt="mouth diagram" />
                            <img src={chart} alt="zsigmondy diagram" />
                        </div>
                        <Button ><Link className="btn btn-secondary"to={`/form/${this.props.value}/update`}>Edit</Link></Button>
                        <PDF name={this.state.doctorName}
                             address={this.state.address}
                             zip={this.state.zip}
                             patientName={this.state.patientName}
                             age={this.state.age}
                             gender={this.state.gender}
                             paymentType={this.state.paymentType}
                             mainComplaint={this.state.mainComplaint}
                             date={this.state.date}
                             deliveryDate={this.state.deliveryDate}
                             deliveryTime={this.state.deliveryTime}
                             specs={this.state.specs}
                             otherOption={this.state.otherOption}
                             filename={this.state.patientName}
                        />
                    </div>
                )}
            </MyContext.Consumer>
        );
    }
}

export default CardInfo;
