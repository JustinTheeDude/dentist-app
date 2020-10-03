import React from 'react'
import { FormGroup, Label, Input } from "reactstrap";

function MainComplaint({ handleChange, mainComplaint}) {
  return (
    <FormGroup className="main-complaint form-box">
      <Label className="main-complaint-label">主訴</Label>
      <Input type="textarea" name="mainComplaint" placeholder="主訴" onChange={handleChange} value={mainComplaint || ""} />
    </FormGroup>
  )
};

export default MainComplaint;