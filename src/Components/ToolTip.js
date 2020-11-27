import React, {Component} from "react";
import PropTypes from "prop-types";
import {FormGroup, Label, Input} from "reactstrap";

class ToolTipSelect extends Component {
    render() {
        const prop_options = this.props.options;

        return (
            <div id="tool_tip">
                {prop_options.map((option, i) =>
                <FormGroup check inline key={i}>
                    <Label check for={this.props.label_id}>{option}</Label> &nbsp;&nbsp;
                    <Input type="checkbox" id={this.props.label_id} name={this.props.label_id} />
                </FormGroup>
                )}
            </div>
        );
    }
}

ToolTipSelect.propTypes = {
    options: PropTypes.array.isRequired,
    label_id: PropTypes.string.isRequired
};

export default ToolTipSelect;
