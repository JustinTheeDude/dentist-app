import React  from 'react';
import  { FormGroup, Label, Input, Button } from "reactstrap";
import { useHistory } from 'react-router-dom';
function DoctorInfo({user, address, zip, handleChange, page,}) {

    const history = useHistory();
    return (
      <div>
        <h3 className="hospital-info-header">医院情報</h3>
          <FormGroup className="doc-name form-box">
          <Label >担当名</Label>
          { user?
              <h1>{user}</h1> :
              <Input
                  type="text"
                  name="doctorName"
                  placeholder="名前"
                  onChange={handleChange}
                  value={user}
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
          
          <Button className="nav-btn" onClick={() => history.push(`/form/patient`)}>  Next </Button>
         
      </div>
    )
}

export default DoctorInfo;