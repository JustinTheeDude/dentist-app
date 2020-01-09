import React, {Component} from "react";
import {Col, Form, FormGroup, Label, Input,Button, FormFeedback, FormText} from "reactstrap";
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
                <FormGroup row>
                    <Label >医院名住所</Label>
                    <Col sm={10}>
                        <Input type="text" name="text" placeholder="〒 123-4567" />
                        <FormFeedback>You will not be able to see this</FormFeedback>
                        <FormText>Example help text that remains unchanged.</FormText>
                        <Input type="text" name="text" placeholder="住所" />
                    </Col>
                </FormGroup>
                <FormGroup row >
                    <Label >担当名</Label>
                    <Col sm={10}>
                        <Input type="text" name="text" placeholder="名前" />
                    </Col>
                </FormGroup>
                <FormGroup row >
                    <Label>発注日</Label>   
                    <Col sm={10}>
                    <div>
                            年:
                            <Input type="text" name="text" placeholder="年" />
                            月:
                            <Input type="text" name="text" placeholder="月" />
                            日:
                            <Input type="text" name="text" placeholder="日" />
                    </div>
                    </Col>
                </FormGroup>
                <FormGroup row >
                    <Label>年令</Label>
                    <Col sm={10}>
                        <div>
                            <Input type="text" name="text" placeholder="番号" /> 才
                        </div>
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
                    <Label>患者名</Label>
                    <Col sm={10}>
                        <Input type="text" name="text" placeholder="名前" />
                    </Col>
                </FormGroup>
                <FormGroup row >
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
