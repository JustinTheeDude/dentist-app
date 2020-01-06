import React from 'react'
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';


const MainInfo = ({fullDate, onDayClick}) => {
    return (
        <Form>
            <FormGroup row>
                <Label>医院名住所</Label>
                <Col sm={10}>
                    <Input type="text" name="text"  placeholder="〒 123-4567"/>
                    <Input type="text" name="text"  placeholder="住所"/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label>患者名</Label>
                <Col sm={10}>
                    <Input type="text" name="text"  placeholder="名前"/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label>納期日</Label>
                <Col sm={10}>
                    <Input type="text" name="text"  placeholder="月　　日　　時　　分"/>
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
                <Input type="textarea" name="text"  placeholder="主訴"/>
            </Col>
        </FormGroup>
        </Form>
    )
}

export default MainInfo;
