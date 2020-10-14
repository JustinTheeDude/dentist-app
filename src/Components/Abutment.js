import React from 'react'
import { FormGroup, Label, Input } from "reactstrap";

function Abutment({ abutmentType, touaregSystem, connectionSelect, abutmentShade, insertionGroup, handleChange}) {
  return (
    <FormGroup className="abutment form-box">
      <Label for="abutment">補綴物アバットメント</Label>
        <Input type="select" name="abutmentType" value={abutmentType} onChange={handleChange} required>
            <option>Adin</option>
            <option>Alfa Gate</option>
            <option>Alliance</option>
            <option>Alpha-Bio Tec</option>
            <option>Anthogyr</option>
            <option>Argon</option>
            <option>Avinent</option>
            <option>B&B Dental</option>         
        </Input>
     <Label for="touareg-system">システムTouareg</Label>
        <Input type="select" name="touaregSystem"  value={touaregSystem} onChange={handleChange} required>
            <option>なし</option>         
            <option>Touareg</option>
        </Input>
    <Label for="connection-select">接続選択</Label>
        <Input type="select" name="connectionSelect" value={connectionSelect} onChange={handleChange} required>
            <option>なし</option> 
            <option>WP</option>
            <option>NP</option>
            <option>UNP</option>
            <option>RP</option>
        </Input>
    <Label for="abutment">シェード選択</Label>
        <Input type="select" name="abutmentShade" value={abutmentShade} onChange={handleChange} required>
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
    <Label for="abutment">挿入グループ</Label>
        <Input type="select" name="insertionGroup" value={insertionGroup} onChange={handleChange} required>
            <option>グループ外</option>
            <option>グループを作成</option>
        </Input>
   </FormGroup>
  )
};

export default Abutment;
