import React, {Component} from "react";
import {Col, Row, Form, FormGroup, Label,Input, Button} from "reactstrap";
import OtherOption from './OtherOption';
class MainInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ""};
    
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    render () {
        return (
            <Form id="main_form" className="main-form">
                <h3 className="hospital-info-header">医院情報</h3>
                <FormGroup row className="doctor-name" >
                    <Label >担当名</Label>
                    <Col sm={10}>
                        <Input type="text" name="text" placeholder="名前" />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleAddress">医院名住所</Label>
                    <Input type="text" name="address" id="exampleAddress" placeholder="市区町村"/>
                </FormGroup>
                    <Row form>
                    <Col md={6}>    
                <FormGroup>
                    <Label for="exampleZip">〒</Label>
                    <Input type="text" name="zip" id="exampleZip"/>
                </FormGroup>  
                    </Col>
                    </Row>
                <h3　className="patient-info-header">患者情報</h3>
                <FormGroup row className="patient-name" >
                    <Label>患者名</Label>
                    <Col sm={10}>
                        <Input type="text" name="text" placeholder="名前" />
                    </Col>
                </FormGroup>
                <FormGroup row >
                    <Label className="age-label">年令</Label>
                    <Col sm={10}>
                        <div className="age-div">才</div> 
                        <Input type="text" name="text" placeholder="才" />                                          
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label >性別</Label>
                    <Input type="select" name="select" id="gender-select-menu">
                    <option>男</option>
                    <option>女</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                <Label>製品仕様</Label>
                    <Input type="select" name="select" id="product-specs-menu"　onChange={this.handleChange}>
                    <option>レジン床</option>   
                    <option>金属床(Co-Cr. Ti. Gold)</option>
                    <option>治療用義歯</option>
                    <option id="option-other">他</option>
                    </Input>
                    {this.state.value === "他" && <OtherOption />}
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">支払い</Label>
                    <Input type="select" name="select" id="exampleSelect">
                    <option>保険</option>
                    <option>自費</option>
                    </Input>
                </FormGroup>
                <FormGroup row className="main-complaint-label">
                    <Label>主訴</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="text" placeholder="主訴" />
                    </Col>
                </FormGroup>
                <FormGroup className="delivery-time">
                    <Label for="exampleTime">納期時間</Label>
                    <Input
                    type="time"
                    name="time"
                    id="exampleTime"
                    placeholder="time placeholder"
                    />
                </FormGroup> 
                 <Button>Submit</Button>
            </Form>
        );
    }
};

export default MainInfo;
