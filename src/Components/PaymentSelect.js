import React from 'react';
import { FormGroup,Label, Input } from "reactstrap";

function PaymentSelect({ paymentType, handleChange, }) {

  return (
    <div>
    <FormGroup className="patient-payment-select form-box">
      <Label for="paymentSelect">支払い</Label>
        <Input type="select" name="paymentType" value={paymentType} onChange={handleChange} required>
          {/* <option>なし</option>
          <option>インレー</option>
          <option>クラウン</option>
          <option>Br</option>
          <option>口腔内装置</option> */}
          <option>保険</option>
          <option>自費</option>
        </Input>
    </FormGroup>
  
    </div>
  )
};


export default PaymentSelect;