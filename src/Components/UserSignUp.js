import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import firebase from './firebase';
import { withRouter, Link } from 'react-router-dom'


 class UserSignUp extends Component {

  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    nameError: [],
    confirmPwError: [],
    firebaseErr : [],
  }
  
  signUp = e => {
   e.preventDefault();
  let { email, password, confirmPassword, displayName } = this.state

    if (!displayName ) {
        this.setState({ nameError: ["must have user name"] })
    } 
    else if (password !== confirmPassword) {
      this.setState({ confirmPwError:  ["passwords don't match"] })
    }
    else {
      firebase
      .auth().createUserWithEmailAndPassword(email, password) 
      .then( user => {
        user = firebase.auth().currentUser
        // console.log("This is the user: ", user.email)
        
        if(user) {
          user.updateProfile({
            displayName
          })
          console.log("users name: ", displayName)
          this.props.history.push('/cards')
        }
        // console.log("this is the user object after name input: ", user)
        this.setState({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        })
      })
      .catch((firebaseErr) => {
        this.setState({ firebaseErr })
      });
    }
    // if ( password === confirmPassword) {
    //   firebase
    //     .auth().createUserWithEmailAndPassword(email, password) 
    //     .then( user => {
    //       user = firebase.auth().currentUser
    //       // console.log("This is the user: ", user.email)
          
    //       if(user) {
    //         user.updateProfile({
    //           displayName
    //         })
    //         console.log("users name: ", displayName)
    //         this.props.history.push('/cards')
    //       }
    //       // console.log("this is the user object after name input: ", user)
          
    //     })
    //     .catch((error) => {
    //       this.setState({ error })
    //     });
    //   } 

        // this.setState({
        //   displayName: "",
        //   email: "",
        //   password: "",
        //   confirmPassword: "",
        // })
  
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
      nameError,
      confirmPwError,
      firebaseErr,
    } = this.state;
    console.log(nameError)
    console.log(firebaseErr)
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
          {
            nameError ?
            <p style={{color: 'firebrick', fontSize: '15px' }}>{nameError}</p> 
            :
            null
          }
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
          {
            firebaseErr.code === "auth/invalid-email" || firebaseErr.code ===  "auth/email-already-in-use" ?
            <p style={{color: 'firebrick', fontSize: '15px' }}>メールアドレスが 間 違って います</p> 
            :
            null
          }   
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
          {
            firebaseErr.code === "auth/weak-password" ?
            <p style={{color: 'firebrick', fontSize: '15px' }}>パスワードが 間 違って います</p> 
            :
            null
          }
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
          {
            confirmPwError ?
            <p style={{color: 'firebrick', fontSize: '15px' }}>{confirmPwError}</p> 
            :
            null
          }
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

