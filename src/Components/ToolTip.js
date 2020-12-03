import React from "react";
import {FormGroup, Label, Input} from "reactstrap";

const ToolTipSelect = (props) => {
    return (
        <div>
            <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input type="select" name="tooth" id="exampleSelect">
                    {props.options.map(option =>
                    <option>{option}</option>
                    )}
                </Input>
            </FormGroup>
        </div>
    );
}

export default ToolTipSelect;
