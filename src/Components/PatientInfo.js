import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { useHistory } from 'react-router-dom';

function PatientInfo({ patientName, patientID, age, gender, handleChange, page, prevStep }) {
//    const next = e => {
//         e.preventDefault();
//          nextStep();
//       };
    
//      const back = e => {
//         e.preventDefault();
//          prevStep();
//       };
const history = useHistory();
    return (
        <div>
            <h3 className="hospital-info-header">医院情報</h3>
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
            <Button
             color="primary"
            onClick={() => history.goBack()}
            >Back</Button>
             &nbsp;&nbsp; &nbsp;&nbsp;
            <Button
             color="primary"
             onClick={() => history.push(`/form/treatment`)}
            >next</Button>
        </div>
    )
}

export default PatientInfo;