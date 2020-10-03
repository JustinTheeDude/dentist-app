import React, { Component } from 'react';
import  { FormGroup, Label, Input } from "reactstrap";

class DoctorInfo extends Component {

  render () {
    const user = this.props.user
    const address = this.props.address
    const zip = this.props.zip
    const handleChange = this.props.handleChange
    return (
      <div>
          <FormGroup className="doc-name form-box">
          <Label >担当名</Label>
          { user.displayName ?
              <h1>{user.displayName}</h1> :
              <Input
                  type="text"
                  name="doctorName"
                  placeholder="名前"
                  onChange={handleChange}
                  value={user.displayName}
              />  
          }
          </FormGroup>
          <FormGroup className="hospital-address form-box">
              <Label for="exampleAddress">医院名住所</Label> 
              {     
                  address === null?
                  <h1>{address}</h1> :    
                  <Input
                      type="text"
                      name="address"
                      id="exampleAddress"
                      placeholder="市区町村"
                      onChange={handleChange}
                      value={address || ""} 
                  /> 
              }
            
          </FormGroup>
          <FormGroup className="zip form-box">
              <Label for="exampleZip">〒</Label>
          {  
              zip === null ?
              <h1>{zip}</h1> :            
          <Input
              type="text"
              name="zip"
              id="exampleZip"
              onChange={handleChange}
              value={zip || ""}
          /> 
          }
          </FormGroup>
      </div>
    )
  } 
  
}

export default DoctorInfo;