import React from 'react';
import { FormGroup,Label, Input, Button } from "reactstrap";
import { useHistory } from 'react-router-dom';

function PaymentSelect({ paymentType, handleChange, id }) {
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
      >戻る
    </Button>
      &nbsp;&nbsp; &nbsp;&nbsp;
    {
    id ?
    <Button
      className="nav-btn"
      onClick={()=> {
        history.push(`/form/${id}/confirm`) 
        }}
      >次
    </Button>
    :
    <Button
      className="nav-btn"
      onClick={()=> {
        history.push(`/form/treatment`) 
        }}
      >次
    </Button>
    }
    </div>
  )
};


export default PaymentSelect;