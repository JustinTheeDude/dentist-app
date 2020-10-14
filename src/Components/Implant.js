import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

function Implant({ handleChange, implantTreatment, surgicalGuide, noTreatmentPlan, treatmentPlanMaterials }) {
  return (
  <div>
    <FormGroup check inline>
      <Label check for="implantTreatment" >インプラント治療計画: </Label> &nbsp;&nbsp;
        <Input type="checkbox" id="implantTreatment" name="implantTreatment"  checked={implantTreatment} onChange={handleChange} />    
    </FormGroup>
    <FormGroup check inline>
      <Label check for="surgicalGuide">サージカルガイド: </Label> &nbsp;&nbsp;
        <Input type="checkbox" id="surgicalGuide" name="surgicalGuide" checked={surgicalGuide} onChange={handleChange} />                   
    </FormGroup>
      <FormGroup check inline>
        <Label check for="noTreatmentPlan">なし: </Label> &nbsp;&nbsp;
        <Input type="checkbox" id="noTreatmentPlan" name="noTreatmentPlan"  checked={noTreatmentPlan} onChange={handleChange}/>      
    </FormGroup>
    <FormGroup>
      <Label for="treatmentPlanMaterials">材料</Label>
        <Input type="select" name="treatmentPlanMaterials" value={treatmentPlanMaterials} onChange={handleChange} required>
            <option>なし</option>  
            <option>Zirconia with Ti-Base</option>      
            <option>Titanium - monolithic</option>
            <option>Titanium - veneered</option>      
            <option>Co-Cr - monolithic</option>
            <option>Co-Cr - veneered</option>      
            <option>Emax  IPS e.max CAD</option>
            <option>Gold</option>
            <option>PFM - Precious Yellow</option>
            <option>PFM - Precious White</option>
            <option>PFM - Semi-Precious</option>
            <option>PFM - Non-Precious</option>
            <option>PMMA</option>
        </Input>
    </FormGroup>   
  </div>
  )
}

export default Implant;