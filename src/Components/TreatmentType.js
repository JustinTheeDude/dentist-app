import React, {useState} from 'react'
import { FormGroup, Label,Button } from "reactstrap";


function TreatmentType({nextStep, prevStep , getTreatmentOptions,}) {
  const [inlay, setInlay] = useState(false)
  const [crown, setCrown] = useState(false)
  const [br, setBr] = useState(false)
  const [oralDevice, setOralDevice] = useState(false)
  const [implant, setImplant] = useState(false)
  const [denture, setDenture] = useState(false)
  const [other, setOther] = useState(false)

  const next = e => {
    e.preventDefault();
    nextStep();
  };
  const back = e => {
    e.preventDefault();
     prevStep();
  };
  const sendData = () => {

    getTreatmentOptions(inlay,crown,br,oralDevice,implant,denture,other)
  } 
  return (
    <div >
    <h3><strong>Treatment and Payment</strong></h3>
    <FormGroup className="treatmentType form-box">
    <Label for="treatmentType">治療の種類</Label>

        <Button
          className="treatment-btn"
          onClick={(e) => {
            e.preventDefault()
            setInlay(true)
            sendData()
          }}
        >インレー</Button>
        <Button
            className="treatment-btn"
            onClick={(e) => {
            e.preventDefault()
            setCrown(true)
            sendData()
          }}
        >クラウン</Button>
        <Button
            className="treatment-btn"
            onClick={(e) => {
            e.preventDefault()
            setBr(true)
            sendData()
          }}
        >Br</Button>
        <Button
            className="treatment-btn"
            onClick={(e) => {
            e.preventDefault()
            setOralDevice(true)
            sendData()
          }}
        >口腔内装置</Button>
        <Button
            className="treatment-btn"
            onClick={(e) => {
            e.preventDefault()
            setImplant(true)
            sendData()
          }}
        >インプラント</Button> 
        <Button
            className="treatment-btn"
            onClick={(e) => {
            e.preventDefault()
            setDenture(true)
            sendData()
          }}
        >義歯</Button>   
        <Button
           className="treatment-btn"
            onClick={(e) => {
            e.preventDefault()
            sendData(setOther(true))
            sendData()
          }}
        >その他</Button>
  </FormGroup>
  <Button
      color="primary"
      onClick={back}
      >Back
    </Button>
      &nbsp;&nbsp; &nbsp;&nbsp;
    <Button
      color="primary"
      onClick={next}
      >next
    </Button>
    </div>
  )
}

export default TreatmentType;