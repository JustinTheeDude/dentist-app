import React, { Component } from "react";
import { FormGroup, Label, Input } from "reactstrap";


class PatientInfo extends Component {

  render() {
    const handleChange = this.props.handleChange;
    const patientName = this.props.patientName;
    const patientID = this.props.patientID;
    const age = this.props.age;
    const gender = this.props.gender;
    return (
        <div>
            <FormGroup className="patient-name form-box">
              <Label className="patient-name-label">患者名</Label>
                  <Input
                      className="patient-name-input"
                      type="text"
                      name="patientName"
                      placeholder="名前"
                      onChange={handleChange}
                      value={patientName}
                  />
                  <Label className="patientId-label">患者名ID</Label>
                  <Input
                      className="patient-id-input"
                      type="number"
                      name="patientID"
                      placeholder="ID Number"
                      onChange={handleChange}
                      value={patientID}
                  />
            </FormGroup>
            <FormGroup className="age form-box">
                <Label for="age" >年令</Label>
                  <Input
                  onChange={handleChange}
                  type="number"
                  min="0"
                  name="age"
                  id="age"
                  value={age}
                  placeholder="才"
                  />
            </FormGroup>
            <FormGroup className="gender-select-menu form-box">
                <Label>性別</Label>
                  <Input type="select" name="gender" id="gender-select-menu"  value={gender}  onChange={handleChange} required>
                      <option>男</option>
                      <option>女</option>
                  </Input>
            </FormGroup>
        </div>
    )
  }
}

export default PatientInfo;