import React from 'react';
import  { FormGroup, Label, Input  } from 'reactstrap';

function Bridge({ bridgeType, handleChange }) {
  return (
    <FormGroup className="bridge form-box">
      <Label for="bridge">インレータイプ</Label>
        <Input type="select" name="bridgeType"  value={bridgeType} onChange={handleChange} required>
          <option>ブリッジ</option>
          <option>バーブリッジ</option>      
        </Input>
        {/* <Label for="bridge">インレー</Label>
        <Input type="select" name="bridgeType"  onChange={this.handleChange} required>
            <option>none</option>  
        </Input> */}
    </FormGroup>
  )
}

export default Bridge;
