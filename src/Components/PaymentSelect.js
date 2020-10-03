import React from 'react';
import { FormGroup,Label, Input } from "reactstrap";

function PaymentSelect({ paymentType, handleChange }) {
  return (
    <FormGroup className="patient-payment-select form-box">
      <Label for="paymentSelect">支払い</Label>
        <Input type="select" name="paymentType" value={paymentType} onChange={handleChange} required>
            <option>保険</option>
            <option>自費</option>
        </Input>
    </FormGroup>
  )
};


export default PaymentSelect;