import React from 'react'
import { FormGroup, Label, Input } from "reactstrap";

function DeliveryTime({ handleChange, deliveryTime}) {
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
      </FormGroup>
    )
}

export default DeliveryTime;