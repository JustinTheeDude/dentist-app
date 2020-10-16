import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

function ProductSpecs ({ specs, value, otherOption,handleChange }) {
  
  return(
      <FormGroup  className="product-specs-menu form-box">
        <Label>製品仕様</Label>
          <Input type="select" name="specs" id="specs" value={specs} onChange={handleChange} required>
          　<option>なし</option>
            <option>レジン床</option>
            <option>金属床(Co-Cr. Ti. Gold)</option>
            <option>治療用義歯</option>
            <option id="otherOption">他</option>
          </Input>
      { value  === "他" || otherOption ?
      <FormGroup>
        <Label>他</Label>
            <Input 
              type="textarea" 
              name="otherOption"  
              placeholder="他" 
              onChange={handleChange}
              value={otherOption || ""} 
              required  
              /> 
      </FormGroup>
        :
        null
      }
  </FormGroup>
  )
}

export default ProductSpecs;