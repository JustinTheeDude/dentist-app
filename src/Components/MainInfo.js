import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const MainInfo = () => {
    return (
        <Form>
            <FormGroup row>
                <Label>医院名住所</Label>
                <Col sm={10}>
                    <Input type="textarea" name="text" id="exampleText" placeholder="住所書いてください"/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label>患者名</Label>
                <Col sm={10}>
                    <Input type="text" name="text" id="exampleText" placeholder="名前"/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label>納期日</Label>
                <Col sm={10}>
                    <Input type="text" name="text" id="exampleText" placeholder="月　　日　　時　　分"/>
                </Col>
            </FormGroup>
            <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            保険
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            自費
          </Label>
        </FormGroup>
        <FormGroup row>
            <Label>主訴</Label>
            <Col sm={10}>
                <Input type="textarea" name="text" id="exampleText" placeholder="主訴"/>
            </Col>
        </FormGroup>
        </Form>
    )
}

export default MainInfo;
