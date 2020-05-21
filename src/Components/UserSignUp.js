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
        this.setState({ nameError: ["名前を入力してください"] })
    } 
    else if (password !== confirmPassword) {
      this.setState({ confirmPwError:  ["パスワードが一致しません"] })
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
    return (
      <Form className="login" onSubmit={this.signUp} >
        <FormGroup>
          <Label for="displayName">名前</Label>
          <Input
              type="text"
              name="displayName"
              id="displayName"
              placeholder="名前"
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
          <Label for="Email">メール</Label>
          <Input
              type="email"
              name="email"
              id="email"
              placeholder="email@email.com"
              onChange={this.handleChange}
              value={email}
          />
          {
            firebaseErr.code === "auth/invalid-email" &&
            <p style={{color: 'firebrick', fontSize: '15px' }}>メールアドレスを入力してください</p> 
          }   
          {
            firebaseErr.code ===  "auth/email-already-in-use" &&
            <p style={{color: 'firebrick', fontSize: '15px' }}>このメールアドレスは使用されています</p> 
          }
      </FormGroup>
      <FormGroup>
          <p style={{fontSize: '10px'}}>パスワードは6文字以上にする必要があります</p>
          <Label for="Password">パスワード</Label>
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
          <Label for="confirmPassword">パスワード確認</Label>
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
      会員の方はこちら <Link to="/">クリック</Link> 下さい！
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

