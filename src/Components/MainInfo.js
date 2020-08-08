import React, {Component} from "react";
import { Form, FormGroup, Label, Input, Button} from "reactstrap";
import firebase from "./firebase.js";
// Component import
import Calendar from "react-calendar";
import DeliveryDate from "./DeliveryDate";


class MainInfo extends Component {
    state = {
        date: new Date(),
        deliveryDate: "",
        minDate: new Date(),
        doctorName: "",
        address: "",
        zip: "",
        contactName: "",
        year: "",
        month: "",
        day: "",
        age: "",
        gender: "男",
        specs: "レジン床",
        paymentType: "保険",
        mainComplaint: "",
        deliveryTime: "",
        otherOption: "",
    };

    user = firebase.auth().currentUser;

    onChange = deliveryDate => {
        this.setState({deliveryDate});
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            value: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const itemsRef = firebase.database().ref(`Dentist/${this.user.uid}/Form`);
        const item = {
            doctorName: this.user.displayName,
            address: this.state.address,
            zip: this.state.zip,
            contactName: this.state.contactName,
            year: this.state.deliveryDate.toString().slice(11, 15),
            month: this.state.deliveryDate.toString().slice(4, 7),
            day: this.state.deliveryDate.toString().slice(0, 4),
            age: this.state.age,
            gender: this.state.gender,
            specs: this.state.specs,
            paymentType: this.state.paymentType,
            mainComplaint: this.state.mainComplaint,
            deliveryTime: this.state.deliveryTime,
            otherOption: this.state.otherOption

        };

        itemsRef.push(item);
        const ref = firebase.database().ref(`Dentist/${this.user.uid}/Info`)
        ref.update({address: this.state.address, zip: this.state.zip})
        this.setState({
            deliveryDate: "",
            contactName: "",
            year: "",
            month: "",
            day: "",
            age: "",
            mainComplaint: "",
            otherOption: ""
        })

    }

    componentDidMount() {
        if(this.props.value !== "") {
            const ref = firebase.database().ref(`Dentist/${this.user.uid}/Info`)
            ref.on('value',(snap)=>{
                this.setState({
                    address: snap.val().address,
                    zip: snap.val().zip
                })
            });
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
                        />
                    }
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
                            name="contactName"
                            placeholder="名前"
                            onChange={this.handleChange}
                            value={this.state.contactName}
                        />
                </FormGroup>
                <FormGroup className="age form-box">
                    <Label for="exampleNumber" >年令</Label>
                    <Input

                    onChange={this.handleChange}
                    type="number"
                    min="0"
                    name="age"
                    id="exampleNumber"
                    placeholder="才"
                    />
                </FormGroup>
                <FormGroup className="gender-select-menu form-box">
                    <Label>性別</Label>
                    <Input type="select" name="gender" id="gender-select-menu"  value={this.state.gender}  onChange={this.handleChange} required>
                        <option>男</option>
                        <option>女</option>
                    </Input>
                </FormGroup>
                <FormGroup  className="product-specs-menu form-box">
                    <Label>製品仕様</Label>
                    <Input type="select" name="specs" id="specs" onChange={this.handleChange} required>
                        <option>レジン床</option>
                        <option>金属床(Co-Cr. Ti. Gold)</option>
                        <option>治療用義歯</option>
                        <option id="otherOption">他</option>
                    </Input>
                    { this.state.value  === "他" || this.state.otherOption ?
                        <FormGroup>
                        <Label>他</Label>
                            <Input
                                type="textarea"
                                name="otherOption"
                                placeholder="他"
                                onChange={this.handleChange}
                                value={this.state.otherOption || ""}
                                required
                                />
                        </FormGroup>
                        :
                        null
                    }
                </FormGroup>
                <FormGroup className="patient-payment-select form-box">
                    <Label for="exampleSelect">支払い</Label>
                    <Input type="select" name="paymentType" id="exampleSelect" onChange={this.handleChange} required>
                        <option>保険</option>
                        <option>自費</option>
                    </Input>
                </FormGroup>
                <FormGroup className="main-complaint form-box">
                    <Label className="main-complaint-label">主訴</Label>
                        <Input type="textarea" name="mainComplaint" placeholder="主訴" onChange={this.handleChange} value={this.state.mainComplaint || ""} required />
                </FormGroup>
                <FormGroup  className="delivery-time form-box" >
                    <Label for="exampleTime" >Time</Label>
                    <Input
                    type="time"
                    name="deliveryTime"
                    id="exampleTime"
                    placeholder="time placeholder"
                    onChange={this.handleChange}
                    />
                </FormGroup>
                    <h3 className="order-heading">発注日/納期日</h3>
                    <div className="calendar form-box">
                    <Calendar
                        calendarType="US"D
                        onClickDay={this.onChange}
                        minDate={this.state.minDate}
                    />
                    <DeliveryDate
                        day={this.state.day}
                        delivery={this.state.deliveryDate.toString().slice(0, 16)}
                    />
                    {/* <div className="canvas form-box">
                        <Canvas />
                    </div> */}
                </div>
                <Button id="btn" className="form-box">Submit</Button>
            </Form>
        );
    }
}

export default MainInfo;
