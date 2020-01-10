import React from "react";
import { FormGroup, Col, Input } from "reactstrap";

const OtherOption = () => {
    return (
        <FormGroup row >
        <Col sm={10}>
            <Input type="textarea" name="text" placeholder="他"  />
        </Col>
        </FormGroup> 
    )
}

export default OtherOption;