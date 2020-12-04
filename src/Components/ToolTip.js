import React from "react";
import {FormGroup, Label, Input} from "reactstrap";

const ToolTipSelect = (props) => {
    return (
        <div>
            <FormGroup id={props.id}>
                <Label for="exampleSelect">{props.select_name}</Label>
                <Input type="select" name="tooth" onChange={(e) => props.handler(e.target.value)} id="exampleSelect">
                    {props.options.map((option, i) =>
                    <option key={i} value={option}>{option}</option>
                    )}
                </Input>
            </FormGroup>
        </div>
    );
}

export default ToolTipSelect;
