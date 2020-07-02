import React, {Component} from "react";
import { Form, FormGroup, Label, Input, Button} from "reactstrap";
import OtherOption from "./OtherOption";
import firebase from "./firebase.js";

// Component import
import Calendar from "react-calendar";
import DeliveryDate from "./DeliveryDate";
import Canvas from './Canvas';

class MainInfo extends Component {
    state = {
        date: new Date(),
        deliveryDate: "",
        minDate: new Date(),
        value: "",
        doctorName: "",
        address: "",
        zip: "",
        contactName: "",
        year: "",
        month: "",
        day: "",
        info: "",
        age: "",
    };
    user = firebase.auth().currentUser
    onChange = deliveryDate => {
        this.setState({deliveryDate});
        console.log(this.state.deliveryDate);
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            value: e.target.value
        }); 
    };

    handleSubmit = e => {
        e.preventDefault();
        const itemsRef = firebase.database().ref("Form");
        const item = {
            value: this.state.value,
            doctorName: this.state.doctorName,
            address: this.state.address,
            zip: this.state.zip,
            contactName: this.state.contactName,
            year: this.state.year,
            month: this.state.month,
            day: this.state.day,
            info: this.state.info,
            age: this.state.age,
        };
        itemsRef.push(item);
        const ref = firebase.database().ref("Dentist")
        ref.orderByKey().on("child_added", (snapshot) => {
            if(snapshot.val().dentist_id === this.user.uid) {   
               ref.child(snapshot.key).update({
                address: this.state.address,
                zip: this.state.zip
                })  
            }
        })
    }
    componentDidMount() {
        if(this.props.value !== "") {
            const ref = firebase
                .database()
                .ref("Dentist")
            ref.orderByKey().on("child_added", (snapshot) => {
                let items = snapshot.val();
                if(this.user.uid === items.dentist_id) {
                    this.setState({
                        address: items["address"],
                        zip: items["zip"],
                    })
                }
            })
        }
    }

    render() {
        const user = firebase.auth().currentUser
        return (
            <Form id="main_form" className="main-form" onSubmit={this.handleSubmit}>
                <h3 className="hospital-info-header">医院情報</h3>
                <FormGroup className="doc-name form-box">
                    <Label >担当名</Label>
                    { user.displayName ?
                        <h1>{user.displayName}</h1> :
                     <Input
                        type="text"
                        name="doctorName"
                        placeholder="名前"
                        onChange={this.handleChange}
                        value={user.displayName}
                    />  }
                </FormGroup>
                <FormGroup className="hospital-address form-box">
                    <Label for="exampleAddress">医院名住所</Label> 
                    {     
                        this.state.address === null?
                        <h1>{this.state.address}</h1> :    
                        <Input
                            type="text"
                            name="address"
                            id="exampleAddress"
                            placeholder="市区町村"
                            onChange={this.handleChange}
                            value={this.state.address || ""} 
                        /> 
                    }
                   
                </FormGroup>
                <FormGroup className="zip form-box">
                    <Label for="exampleZip">〒</Label>
                {  
                    this.state.zip === null ?
                    <h1>{this.state.zip}</h1> :            
                <Input
                    type="text"
                    name="zip"
                    id="exampleZip"
                    onChange={this.handleChange}
                    value={this.state.zip || ""}
                /> 
                }
                </FormGroup>
                <h3 className="patient-info-header">患者情報</h3>
                <FormGroup className="patient-name form-box">
                    <Label className="patient-name-label">患者名</Label>
                        <Input
                            className="patient-name-input" 
                            type="text"
                            name="info"
                            placeholder="名前"
                            onChange={this.handleChange}
                            value={this.state.info}
                        />
                </FormGroup>
                <FormGroup className="age form-box">
                    <Label for="exampleNumber" >年令</Label>
                    <Input
                    onChange={this.handleChange} 
                    type="number"
                    min="0"
                    name="number"
                    id="exampleNumber"
                    placeholder="才"
                    />
                </FormGroup>
                <FormGroup className="gender-select-menu form-box">
                    <Label>性別</Label>
                    <Input type="select" name="select" id="gender-select-menu" required>
                        <option>男</option>
                        <option>女</option>
                    </Input>
                </FormGroup>
                <FormGroup  className="product-specs-menu form-box">
                    <Label>製品仕様</Label>
                    <Input type="select" name="select" onChange={this.handleChange} required>
                        <option>レジン床</option>
                        <option>金属床(Co-Cr. Ti. Gold)</option>
                        <option>治療用義歯</option>
                        <option id="option-other">他</option>
                    </Input>
                    {this.state.value === "他" && <div className="other-option"><OtherOption /> </div>}
                </FormGroup>
                <FormGroup className="patient-payment-select form-box">
                    <Label for="exampleSelect">支払い</Label>
                    <Input type="select" name="select" id="exampleSelect" required>
                        <option>保険</option>
                        <option>自費</option>
                    </Input>
                </FormGroup>
                <FormGroup className="main-complaint form-box">
                    <Label className="main-complaint-label">主訴</Label>
                        <Input type="textarea" name="text" placeholder="主訴" required />
                </FormGroup>
                <FormGroup  className="delivery-time form-box" >
                    <Label for="exampleTime" >Time</Label>
                    <Input
                    type="time"
                    name="time"
                    id="exampleTime"
                     placeholder="time placeholder"
                    />
                </FormGroup>
                    <h3 className="order-heading">発注日/納期日</h3>
                    <div className="calendar form-box">
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
                    <div className="canvas form-box">
                        <Canvas />
                    </div>
                </div>
                <Button id="btn" className="form-box">Submit</Button>
            </Form>
        );
    }
}

export default MainInfo;
