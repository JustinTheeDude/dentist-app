import React from 'react'
import { FormGroup, Label, Input, Button } from "reactstrap";
import { useHistory } from 'react-router-dom';

function DeliveryTime({ handleChange, deliveryTime, id}) {
  const history = useHistory();
    return(
      <div>
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
        <Button className="nav-btn" onClick={() => history.goBack()}>戻る</Button>
        {
          id ?
          <Button className="nav-btn" onClick={()=> { history.push(`/form/${id}/confirm`) }}>次</Button>
          :
          <Button className="nav-btn" onClick={()=> { history.push(`/form/diagram`) }}>次</Button>
          }
      </div>
    )
}

export default DeliveryTime;