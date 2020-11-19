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
      <div className="treatment-btn-container">
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

      </div>
  </FormGroup>
  <Button
      className="nav-btn"
      onClick={() => history.goBack()}
      >戻る
    </Button>
      &nbsp;&nbsp; &nbsp;&nbsp;
    <Button
     className="nav-btn"
      onClick={()=> {
        history.push(`/form/delivery`) 
        }}
      >次
    </Button>
    </div>
  )
}

export default TreatmentType;