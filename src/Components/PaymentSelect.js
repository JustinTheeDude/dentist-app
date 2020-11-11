import React from 'react';
import { FormGroup,Label, Input, Button } from "reactstrap";
import { useHistory } from 'react-router-dom';

function PaymentSelect({ paymentType, handleChange, }) {
  const history = useHistory();
  return (
    <div>
    <FormGroup className="patient-payment-select form-box">
      <Label for="paymentSelect">支払い</Label>
        <Input type="select" name="paymentType" value={paymentType} onChange={handleChange} required>
          <option>保険</option>
          <option>自費</option>
        </Input>
    </FormGroup>
    <Button
      className="nav-btn"
      onClick={() => history.goBack()}
      >Back
    </Button>
      &nbsp;&nbsp; &nbsp;&nbsp;
    <Button
      className="nav-btn"
      onClick={()=> {
        history.push(`/form/treatment`) 
        }}
      >next
    </Button>
    </div>
  )
};


export default PaymentSelect;