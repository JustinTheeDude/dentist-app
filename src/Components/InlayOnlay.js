import React from 'react'
import { FormGroup, Label, Input } from "reactstrap";

function InlayOnlay({inlayOnlay, inlayMaterial, inlayShade, handleChange }) {
  return (
    <FormGroup className="inlay-onlay form-box">
      <Label for="inlayOnlay">インレーとアンレー</Label>
        <Input type="select" name="inlayOnlay" value={inlayOnlay} onChange={handleChange} required>
          <option>クラウン</option>
          <option>クラウン&#8226;ポンティック</option>
          <option>インレーとアンレー</option>
          <option>べニア</option>
          <option>なし</option>        
        </Input>
      <Label for="inlayMaterial">補綴物インレー</Label>
        <Input type="select" name="inlayMaterial"  value={inlayMaterial} onChange={handleChange} required>
          <option>Emax</option>
          <option>Zirconia - monolithic</option>
          <option>Zirconia - veneered</option>       
        </Input>
      <Label for="inlayShade">シェード選択</Label>
        <Input type="select" name="inlayShade" value={inlayShade} onChange={handleChange} required>
          <option>なし</option>
          <option>A 1</option>
          <option>A 2</option>
          <option>A 3</option>
          <option>A 3,5</option>
          <option>A 4</option>
          <option>B 1</option>
          <option>B 2</option>
          <option>B 3</option>
          <option>B 4</option>
          <option>C 1</option>
          <option>C 2</option>
          <option>C 3</option>
          <option>C 4</option>
        </Input>
    </FormGroup>
  )
}

export default InlayOnlay