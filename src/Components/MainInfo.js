import React from "react";
import {Col, Form, FormGroup, Label, Input} from "reactstrap";

const MainInfo = () => {
    return (
        <Form id="main_form" className="main-form">
            <FormGroup row className="address">
                <Label >医院名住所</Label>
                <Col sm={10}>
                    <Input type="text" name="text" placeholder="〒 123-4567" />
                    <Input type="text" name="text" placeholder="住所" />
                </Col>
            </FormGroup>
            <FormGroup row className="doctor-name">
                <Label >担当名</Label>
                <Col sm={10}>
                    <Input type="text" name="text" placeholder="名前" />
                </Col>
            </FormGroup>
            <FormGroup row className="order-date">
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
            <FormGroup row className="age">
                <Label>年令</Label>
                <Col sm={10}>
                    <div>
                        <Input type="text" name="text" placeholder="番号" /> 才
                    </div>
                </Col>
            </FormGroup>
            <FormGroup check className="gender-male">
                <div>性別</div>
                <Label check>
                    <Input type="radio" name="radio1" className="male"/> 男
                </Label>
            </FormGroup>
            <FormGroup check className="gender-female">
                <Label check>
                    <Input type="radio" name="radio1" className="female"/> 女
                </Label>
            </FormGroup>
            <FormGroup check>
                <div className="product-specs-resin">製品仕様</div>
                <Label check className="resin-label">
                    <Input type="radio" name="radio1" className="resin" /> レジン床
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check className="product-gold-label">
                    <Input type="radio" name="radio1" className="product-gold" /> 金属床(Co-Cr. Ti. Gold)
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check className="dentures-label">
                    <Input type="radio" name="radio1" className="product-dentures"/>治療用義歯
                </Label>
            </FormGroup>
            <FormGroup row className="product-other">
                <Col sm={10}>
                    <Input type="text" name="text" placeholder="他"  />
                </Col>
            </FormGroup>
            <FormGroup row className="patient-name">
                <Label>患者名</Label>
                <Col sm={10}>
                    <Input type="text" name="text" placeholder="名前" />
                </Col>
            </FormGroup>
            <FormGroup row className="delivery-date">
                <Label>納期日</Label>
                <Col sm={10}>
                    <div className="delivery-month">
                        月:
                        <Input  type="text" name="text" placeholder="月" />
                        日:
                        <Input type="text" name="text" placeholder="日" />
                    </div>
                    <div className="delivery-time   ">
                        時:
                        <Input type="text" name="text" placeholder="時" />
                        分:
                        <Input type="text" name="text" placeholder="分" />
                    </div>
                </Col>
            </FormGroup>
            <FormGroup check className="payment-insurance">
                <Label check>
                    <Input type="radio" name="radio1" className="insurance-button" /> 保険
                </Label>
            </FormGroup>
            <FormGroup check className="payment-cash">
                <Label check>
                    <Input type="radio" name="radio1" className="cash-button" /> 自費
                </Label>
            </FormGroup>
            {/* <FormGroup row className="additional-info">
                <Label>主訴</Label>
                <Col sm={10}>
                    <Input type="textarea" name="text" placeholder="主訴" />
                </Col>
            </FormGroup> */}
            {/* <Button>Submit</Button> */}
        </Form>
    );
};

export default MainInfo;
