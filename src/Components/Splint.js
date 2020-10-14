import React from 'react'
import { FormGroup,Label, Input  } from "reactstrap";

function Splint({ handleChange, splint, splintMaterials, splintShade }) {
  return(
    <FormGroup className="splint form-box">
      <Label for="splint">補綴物</Label>
        <Input type="select" name="splint" value={splint} onChange={handleChange} required>
          <option>なし</option>
          <option>スプリント</option>       
        </Input>
      <Label for="splintMaterials">材料</Label>
        <Input type="select" name="splintMaterials" value={splintMaterials} onChange={handleChange} required>
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
        </Input>
     <Label for="splintShade">シェード選択</Label>
        <Input type="select" name="splintShade" value={splintShade} onChange={handleChange} required>
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

export default Splint