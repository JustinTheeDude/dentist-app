import React, {Component} from 'react'
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom'
// import firebase from 'firebase'

class Registration extends Component {
  
//   database =  firebase.database() 
//   ref = this.database.ref("Technicians").on("value", this.gotData, this.errData)
  
//   gotData(data) {
//   //  console.log(data.val());
//   const techs = data.val();
//   const keys = Object.keys(techs);
//   console.log(keys)
//  }
//   errData(err) {
//    console.log('Error!');
//    console.log(err)
//  }


  render() {
    return(
      <div className=".signup registration">
        <Button id="registration-btn" ><Link id="registration-link" to="/dentist">Dentist</Link></Button>
        &nbsp;&nbsp;&nbsp;    
        <Button id="registration-btn" ><Link id="registration-link" to="/technician">Technician</Link></Button>
      </div> 
    )
  }
}


export default Registration