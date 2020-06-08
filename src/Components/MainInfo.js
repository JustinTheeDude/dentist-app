import React, {Component} from "react";
import {Col, Row, Form, FormGroup, Label, Input, Button} from "reactstrap";
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
    };

    
    render() {
        
        return (
            <Form id="main_form" className="main-form" onSubmit={this.handleSubmit}>
                <h3 className="hospital-info-header">医院情報</h3>
                <FormGroup row >
                    <Label className="doc-name-label">担当名</Label>
                    <Col sm={10}>
                        <Input
                            className="doctor-name"
                            type="text"
                            name="doctorName"
                            placeholder="名前"
                            onChange={this.handleChange}
                            value={this.state.doctorName}
                        />
                    </Col>
                </FormGroup>
                <FormGroup className="hospital-address">
                    <Label for="exampleAddress">医院名住所</Label>
                    <Input
                        type="text"
                        name="address"
                        id="exampleAddress"
                        placeholder="市区町村"
                        onChange={this.handleChange}
                        value={this.state.address}
                        required
                    />
                    {/* { !this.state.address && style={{ border: "2px solid firebrick"}} } */}
                </FormGroup>
                <Row form>
                    <Col md={6}>
                        <FormGroup className="zip">
                            <Label for="exampleZip">〒</Label>
                            <Input
                                type="text"
                                name="zip"
                                id="exampleZip"
                                onChange={this.handleChange}
                                value={this.state.zip}
                                required
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <h3 className="patient-info-header">患者情報</h3>
                <FormGroup className="patient-name" row>
                    <Label className="patient-name-label">患者名</Label>
                    <Col sm={10}>
                        <Input
                            className="patient-name-input" 
                            type="text"
                            name="info"
                            placeholder="名前"
                            onChange={this.handleChange}
                            value={this.state.info}
                            required
                        />
                    </Col>
                </FormGroup>

                <FormGroup className="age">
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
                <FormGroup className="gender-select-menu">
                    <Label>性別</Label>
                    <Input type="select" name="select" id="gender-select-menu" required>
                        <option>男</option>
                        <option>女</option>
                    </Input>
                </FormGroup>
                <FormGroup  className="product-specs-menu">
                    <Label>製品仕様</Label>
                    <Input type="select" name="select" onChange={this.handleChange} required>
                        <option>レジン床</option>
                        <option>金属床(Co-Cr. Ti. Gold)</option>
                        <option>治療用義歯</option>
                        <option id="option-other">他</option>
                    </Input>
                    {this.state.value === "他" && <div className="other-option"><OtherOption /> </div>}
                </FormGroup>
                <FormGroup className="patient-payment-select">
                    <Label for="exampleSelect">支払い</Label>
                    <Input type="select" name="select" id="exampleSelect" required>
                        <option>保険</option>
                        <option>自費</option>
                    </Input>
                </FormGroup>
                <FormGroup row className="main-complaint">
                    <Label className="main-complaint-label">主訴</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="text" placeholder="主訴" required />
                    </Col>
                </FormGroup>

                <FormGroup  className="delivery-time" >
                    <Label for="exampleTime" >Time</Label>
                    <Input
                    type="time"
                    name="time"
                    id="exampleTime"
                     placeholder="time placeholder"
                    />
                </FormGroup>
                    <h3 className="order-heading">発注日/納期日</h3>
                        <div className="calendar">
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
                    <div className="canvas">
                        <Canvas />
                    </div>
                </div>
                <Button id="btn">Submit</Button>
            </Form>
        );
    }
}

export default MainInfo;
