import React, {Component} from "react";
import {Col, Row, Form, FormGroup, Label, Input, Button} from "reactstrap";

// Component Imports
import OtherOption from "./OtherOption";
import Cal from "./Cal";

class MainInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({
            value: event.target.value, 
        });
    }

    render() {
        return (
            <Form id="main_form" className="main-form">
                <h3 className="hospital-info-header">医院情報</h3>
                <FormGroup  className="doctor-name" >
                    <Label >担当名</Label>
                    <Col sm={10}>
                        <Input type="text" name="text" placeholder="名前" />
                    </Col>
                </FormGroup>
                <FormGroup className="hospital-address">
                    <Label for="exampleAddress">医院名住所</Label>
                    <Input type="text" name="address" id="exampleAddress" placeholder="市区町村" required />
                </FormGroup>
                <Row form>
                    <Col md={6}>
                        <FormGroup className="zip">
                            <Label for="exampleZip">〒</Label>
                            <Input type="text" name="zip" id="exampleZip" placeholder="555-5555" />
                        </FormGroup>
                    </Col>
                </Row>
                <h3 className="patient-info-header">患者情報</h3>
                <FormGroup className="patient-name" row>
                    <Label>患者名</Label>
                    <Col sm={10}>
                        <Input type="text" name="text" placeholder="名前" required />
                    </Col>
                </FormGroup>
                <FormGroup className="age-label">
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
                <FormGroup className="product-specs-menu">
                    <Label>製品仕様</Label>
                    <Input type="select" name="select" id="product-specs-menu" onChange={this.handleChange} required>
                        <option>レジン床</option>
                        <option>金属床(Co-Cr. Ti. Gold)</option>
                        <option>治療用義歯</option>
                        <option id="option-other">他</option>
                    </Input>
                    {this.state.value === "他" && <OtherOption />}
                </FormGroup>
                <FormGroup className="exampleSelect">
                    <Label for="exampleSelect" >支払い</Label>
                    <Input type="select" name="select" id="exampleSelect" required>
                        <option>保険</option>
                        <option>自費</option>
                    </Input>
                </FormGroup>
                <FormGroup className="main-complaint-label">
                    <Label>主訴</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="text" placeholder="主訴" required />
                    </Col>
                </FormGroup>
                <FormGroup  className="delivery-time" >
                    <Label for="Time" >Time</Label>
                    <Input
                    type="time"
                    name="time"
                    id="exampleTime"
                     placeholder="time placeholder"
                    />
                </FormGroup>
                <Cal />
                <Button className="submit-btn">Submit</Button>
            </Form>
        );
    }
}

export default MainInfo;
