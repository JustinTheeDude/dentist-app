import React, {Component} from 'react'
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom'

class Registration extends Component {
  
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