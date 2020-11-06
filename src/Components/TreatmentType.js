import React from 'react'
import { FormGroup,Button } from "reactstrap";
import { useHistory } from 'react-router-dom';

function TreatmentType() {

  const history = useHistory();

  return ( 
    <div >
    <h3><strong>治療の種類</strong></h3>
    <FormGroup className="treatmentType form-box">
    {/* <Label for="treatmentType">治療の種類</Label> */}

        <Button
          className="treatment-btn"
          onClick={(e) => { 
            history.push(`/form/inlay`)
          }}
        >インレー</Button>
        <Button
            className="treatment-btn"
            onClick={(e) => {
              history.push(`/form/crown`)
          }}
        >クラウン</Button>
        <Button
            className="treatment-btn"
            onClick={(e) => {
            e.preventDefault()
            history.push(`/form/br`)
          }}
        >Br</Button>
        <Button
            className="treatment-btn"
            onClick={(e) => {
            e.preventDefault()
            history.push(`/form/oral-device`)
          }}
        >口腔内装置</Button>
        <Button
            className="treatment-btn"
            onClick={(e) => {
            e.preventDefault()
            history.push(`/form/implant`)
          }}
        >インプラント</Button> 
        <Button
            className="treatment-btn"
            onClick={(e) => {
            e.preventDefault()
            history.push(`/form/denture`)
          }}
        >義歯</Button>   
        <Button
           className="treatment-btn"
            onClick={(e) => {
            e.preventDefault()
            history.push("/form/other")
          }}
        >その他</Button> 
  </FormGroup>
  <Button
      color="primary"
      onClick={() => history.goBack()}
      >Back
    </Button>
      &nbsp;&nbsp; &nbsp;&nbsp;
    <Button
      color="primary"
      onClick={()=> {
        history.push(`/form/delivery-time`) 
        }}
      >next
    </Button>
    </div>
  )
}

export default TreatmentType;