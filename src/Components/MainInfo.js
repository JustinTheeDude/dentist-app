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
                <div className="hospital-info-div">医院情報</div>
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
                <FormGroup row >
                    <Label >担当名</Label>
                    <Col sm={10}>
                        <Input type="text" name="text" placeholder="名前" />
                    </Col>
                </FormGroup>
                <FormGroup row >
                {/* This should be removed the order date should be set with the calendar */}
                    <Label>発注日</Label>   
                    <Col sm={10}>
                    <div className="order-div  year-div">年:</div>
                    <div className="order-div month-div">月:</div>
                    <div className="order-div day-div">日:</div>        
                            <Input type="text" name="text" placeholder="年" />
                            <Input type="text" name="text" placeholder="月" />
                            <Input type="text" name="text" placeholder="日" />
                    
                    </Col>
                </FormGroup>
                <div　className="patient-info-div">患者情報</div>
                <FormGroup row >
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
                <FormGroup row >
                {/* This should also be removed the delivery date should be set with the calendar */}
                    <Label>納期日</Label>
                    <Col sm={10}>
                        <div>
                            月:
                            <Input  type="text" name="text" placeholder="月" />
                            日:
                            <Input type="text" name="text" placeholder="日" />
                        </div>
                        <div>
                            時:
                            <Input type="text" name="text" placeholder="時" />
                            分:
                            <Input type="text" name="text" placeholder="分" />
                        </div>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">支払い</Label>
                    <Input type="select" name="select" id="exampleSelect">
                    <option>保険</option>
                    <option>自費</option>
                    </Input>
                </FormGroup>
                <FormGroup row>
                    <Label>主訴</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="text" placeholder="主訴" />
                    </Col>
                </FormGroup> 
                 <Button>Submit</Button>
            </Form>
        );
    }
};

export default MainInfo;
