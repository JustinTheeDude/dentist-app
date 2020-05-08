import React, { Component } from 'react';
import {Form, FormGroup, Label, Input, Button } from 'reactstrap';
import firebase from './firebase';

export default class UserSignUp extends Component {

  state = {
    // firstName: "",
    // lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    // errors: [],
  }

  signUp = ( email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password) 
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      });
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    const {
      // firstName,
      // lastName,
      email,
      password,
      confirmPassword,
      // errors
    } = this.state;

    return (
      <Form className="login" onSubmit={this.signUp(this.state.email, this.state.password)}>
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
          <Label for="Email">Email</Label>
          <Input
              type="email"
              name="email"
              id="email"
              placeholder="email@email.com"
              onChange={this.handleChange}
              value={email}
          />
      </FormGroup>
      <FormGroup>
          <Label for="Password">Password</Label>
          <Input
              type="password"
              name="password"
              id="password"
              placeholder="enter your password"
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
              placeholder="Confirm password"
              onChange={this.handleChange}
              value={confirmPassword}
          />
      </FormGroup>
      <Button>Submit</Button>
  </Form>
    )
  }
}
