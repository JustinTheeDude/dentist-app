import React from 'react'
import { FormGroup, Label, Input, Button } from "reactstrap";
import { useHistory } from 'react-router-dom';

function MainComplaint({ handleChange, mainComplaint, id}) {
  const history = useHistory()
  return (
    <div className="diagram diagram-text">
      <FormGroup >
        <Label className="main-complaint-label">特機事項</Label>
        <Input type="textarea" name="mainComplaint" placeholder="特機事項" onChange={handleChange} value={mainComplaint || ""} />
      </FormGroup>
      <Button className="nav-btn" onClick={() => history.goBack()}>戻る</Button>
      {
            id ?
          <Button className="nav-btn" onClick={()=> {history.push(`/form/${id}/confirm`)}}>次</Button>
          :
          <Button className="nav-btn" onClick={()=> {history.push(`/form/confirm`)}}>次</Button>
          }
    </div>
  )
};

export default MainComplaint;