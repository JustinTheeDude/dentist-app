import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import firebase from './firebase';
import { withRouter, Link, Redirect } from 'react-router-dom'


 class UserSignUp extends Component {

  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: [],
  }
  
  signUp = e => {
   e.preventDefault();
  let { email, password, confirmPassword, displayName } = this.state
    if ( password === confirmPassword) {
      firebase
        .auth().createUserWithEmailAndPassword(email, password) 
        .then( user => {
          user = firebase.auth().currentUser
          console.log("This is the user: ", user.email)
          
          if(user) {
            user.updateProfile({
              displayName
            })
            console.log("users name: ", displayName)
            this.props.history.push('/cards')
          }
          // console.log("this is the user object after name input: ", user)
          
        })
        .catch((err) => {
          this.state.errors.push(err.message)
          console.log(err.message)
        });
      } 

        this.setState({
          displayName: "",
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

  cancel = () => {
    this.props.history.push('/form');
  }
  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword,
      // errors
    } = this.state;

    return (
      <Form className="login" onSubmit={this.signUp} >
        <FormGroup>
          <Label for="displayName">First Name</Label>
          <Input
              type="text"
              name="displayName"
              id="displayName"
              placeholder="Your name"
              onChange={this.handleChange}
              value={displayName}
          />
      </FormGroup>
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
      {/* margin property */}
      &nbsp;&nbsp;&nbsp; 
      <Button onClick={this.cancel}>Cancel</Button>
      <p>
        Already have a user account? <Link to="/">Click here</Link> to sign in!
    </p>
    {
      confirmPassword && confirmPassword !== password   ?
      <div>パスワードが一致しません</div>
      : 
      null
    }
  </Form>
    
    )
  }
}

export default withRouter(UserSignUp);

