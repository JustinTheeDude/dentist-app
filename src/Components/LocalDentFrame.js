import React from 'react'
import { FormGroup, Label, Input } from "reactstrap";

function LocalDentFrame({ localDentureFrame, localDentureFrameMaterials,handleChange }) {
  return (
    <FormGroup className="localDentureFrame form-box">
      <Label for="localDentureFrame">補綴物 局所義歯フレーム</Label>
        <Input type="select" name="localDentureFrame"  value={localDentureFrame} onChange={handleChange} required>
          <option>なし</option>      
          <option>局所義歯フレーム</option>
        </Input>
      <Label for="localDentureFrameMaterials">材料</Label>
      <Input type="select" name="localDentureFrameMaterials" value={localDentureFrameMaterials} onChange={handleChange} required>
          <option>Zirconia with Ti-Base</option>      
          <option>Titanium - monolithic</option>
          <option>Titanium - veneered</option>      
          <option>Co-Cr - monolithic</option>
          <option>Co-Cr - veneered</option>      
          <option>Emax  IPS e.max CAD</option>
          <option>Gold</option>
          <option>PFM - Precious Yellow</option>
          <option>PFM - Precious White</option>
      </Input>
    </FormGroup>
  )
}
export default LocalDentFrame;