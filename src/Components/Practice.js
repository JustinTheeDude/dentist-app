import React, {Component} from 'react'

import firebase from 'firebase'
import {Form, Input, Button } from 'reactstrap';


class Practice extends Component  {

  state = {
    tech_name: "",
    tech_office: "",
    value: "",
  }
  handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value,
        value: e.target.value
    }); 
  };
  handleSubmit = e => {
    e.preventDefault();
    const itemsRef = firebase.database().ref("Technicians");
    const item = {
        value: this.state.value,
        tech_name: this.state.tech_name,
        tech_office: this.state.tech_office
    };
    itemsRef.push(item);
};

  render() {
      return (
      <Form onSubmit={this.handleSubmit} >
          <h1>Dentist Info</h1>
          <Input
            type="text"
            name="tech_name"
            placeholder="名前"
            onChange={this.handleChange}
            value={this.state.tech_name}
        />
        <Input
            type="text"
            name="tech_office"
            placeholder="名前"
            onChange={this.handleChange}
            value={this.state.tech_office}
        />      
        <Button id="btn" className="form-box">Submit</Button>
      </Form>
      
    )
  }

}

export default Practice;