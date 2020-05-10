import React, { Component } from 'react';
import {Form, FormGroup, Label, Input, Button, FormText } from 'reactstrap';
import firebase from './firebase';
import { Redirect } from 'react-router-dom';
// import signUp from './auth';

export default class UserSignUp extends Component {

  state = {
    // firstName: "",
    // lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: [],
  }
  
  signUp = e => {
    e.preventDefault();
   const  { email, password } = this.state
    firebase
      .auth().createUserWithEmailAndPassword(email, password) 
      .then( res => {
        console.log("this is the res: ", res.user)
      })
      .catch((err) => {
        this.state.errors.push(err.message)
        console.log(err.message)
      });
    this.setState({
      email: "",
      password: "",
      confirmPassword: "",
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const {
      // firstName,
      // lastName,
      email,
      password,
      confirmPassword,
      errors
    } = this.state;

    return (
      <Form className="login" onSubmit={this.signUp} >
        {/* <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
              type="text"
              name="firstName"
              id="fistName"
              placeholder="First Name"
              onChange={this.handleChange}
              value={firstName}
          />
      </FormGroup>
      <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={lastName}
          />
      </FormGroup> */}
      <FormGroup>
          <Label for="Email">Email/メール</Label>
          <Input
              type="email"
              name="email"
              id="email"
              placeholder="email@email.com"
              onChange={this.handleChange}
              value={email}
          />
          {/* <FormText>{errors[0]}</FormText> */}
      </FormGroup>
      <FormGroup>
          <Label for="Password">Password</Label>
          <Input
              type="password"
              name="password"
              id="password"
              placeholder="パスワード"
              onChange={this.handleChange}
              value={password}
          />
      </FormGroup>
      <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="パスワード確認"
              onChange={this.handleChange}
              value={confirmPassword}
          />
          {/* <FormText>{errors[1]}</FormText> */}
      </FormGroup>
      <Button >Submit</Button>
  </Form>
    )
  }
}
