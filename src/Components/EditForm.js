import React, { Component } from 'react';
import firebase from 'firebase';
import MainInfo from './MainInfo';

class EditForm extends Component {
  state = {
    address: "",
    age: "",
    patientName: "",
    patientID: "", 
    day: "",
    doctorName: "",
    info: "",
    month: "",
    mainComplaint: "",
    year: "",
    zip: "",
    specs: "",
    otherOption:"",
    complete: false,
};


  render () {

    return (
      
      <MainInfo />
    )
  }
}

export default EditForm