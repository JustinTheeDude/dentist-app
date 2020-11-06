import React from 'react'
import { FormGroup, Label, Input, Button } from "reactstrap";
import { useHistory } from 'react-router-dom';

function DeliveryTime({ handleChange, deliveryTime}) {
  const history = useHistory();
    return(
      <FormGroup  className="delivery-time form-box" >
        <Label for="exampleTime">時間</Label>
          <Input
          type="time"
          name="deliveryTime"
          id="exampleTime"
          placeholder="time placeholder"
          value={deliveryTime}
          onChange={handleChange}
          />
        <Button
        color="primary"
        onClick={() => history.goBack()}
        >Back
      </Button>
        &nbsp;&nbsp; &nbsp;&nbsp;
      <Button
        color="primary"
        onClick={()=> {
          history.push(`/form/delivery-date`) 
          }}
        >next
      </Button>
      </FormGroup>
    )
}

export default DeliveryTime;