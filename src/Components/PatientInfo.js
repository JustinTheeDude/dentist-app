import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

function PatientInfo({lNameKanji, fNameKanji, lNameKana, fNameKana,patientID, age, gender, handleChange, page, prevStep }) {

    return (
        <div>
            <h3 className="hospital-info-header">医院情報</h3>
            <FormGroup className="patient-name form-box">
                <Label className="patientId-label-input">患者名ID</Label>
                <Input
                    className="patient-id-input"
                    type="number"
                    name="patientID"
                    placeholder="ID Number"
                    onChange={handleChange}
                    value={patientID}
                />
            </FormGroup>
            <FormGroup className="patient-name-container ">
                <Label className="patient-name-input " >患者名</Label>
                  <Input
                      className="patient-name-input" 
                      type="text"
                      name="lNameKanji"
                      placeholder="姓"
                      onChange={handleChange}
                      value={lNameKanji}
                  />
                <Input
                    className="patient-name-input "
                    type="text"
                    name="fNameKanji"
                    placeholder="名"
                    onChange={handleChange}
                    value={fNameKanji}
                />
            </FormGroup>
            <FormGroup className="patient-name-container "> 
                    <Label className="patient-name-input">患者名 (フリガナ)</Label>
                     <Input
                        className="patient-name-input"
                        type="text"
                        name="lNameKana"
                        placeholder="姓"
                        onChange={handleChange}
                        value={lNameKana}
                    />
                    <Input
                    className="patient-name-input"
                    type="text"
                    name="fNameKana"
                    placeholder="名"
                    onChange={handleChange}
                    value={fNameKana}
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

export default PatientInfo;