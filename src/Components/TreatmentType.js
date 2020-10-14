import React from 'react'
import { FormGroup, Label, Input } from "reactstrap";


function TreatmentType({treatmentType, handleChange}) {
  return (
    <FormGroup className="treatment-type form-box">
    <Label for="treatmentT">治療の種類</Label>
      <Input type="select" name="treatmentType"  value={treatmentType} onChange={handleChange} required>
        <option>インレー</option>
        <option>クラウン</option>
        <option>Br</option>
        <option>口腔内装置</option>
        <option>義歯(保険)</option>
        <option>その他</option>
        <option>インプラント</option> 
        <option>義歯(自費)</option>   
        {/* <option>なし</option>
        <option>インレーとアンレー</option>
        <option>アバットメント</option>
        <option>テレスコープ</option>
        <option>ブリッジ</option>
        <option>局所義歯</option>
        <option>装置</option> 
        <option>インプラント</option>     */}
      </Input>
  </FormGroup>
  )
}

export default TreatmentType;