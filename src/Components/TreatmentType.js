import React from 'react'
import { FormGroup, Label, Input } from "reactstrap";


function TreatmentType({treatmentType, handleChange}) {
  return (
    <FormGroup className="treatmentType form-box">
    <Label for="treatmentType">治療の種類</Label>
      <Input type="select" name="treatmentType" id="treatmentType"  value={treatmentType} onChange={handleChange} required>
        <option>なし</option>
        <option>インレー</option>
        <option>クラウン</option>
        <option>Br</option>
        <option>口腔内装置</option>
        <option>義歯(保険)</option>
        <option>その他</option>
        <option>インプラント</option> 
        <option>義歯</option>   
      </Input>
  </FormGroup>
  )
}

export default TreatmentType;