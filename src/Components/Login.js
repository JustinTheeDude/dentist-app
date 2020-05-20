import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom';
import {Form, FormGroup, Label, Input, Button, } from "reactstrap";
import firebase from "./firebase";

class Login extends Component {
    state = {
        email: "",
        password: "",
        error: []
    };

    signIn = e => {
        e.preventDefault()
       
        const { email, password, errors } = this.state
        let userId;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(res =>  {
                userId = res.user.uid;
                if (userId) {
                  this.props.history.push('/cards') 
                }
            })
            .catch( error  => {
                console.log("this is the login catch error: ", errors);    
                this.setState({ error })
    
            });
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        const { error } = this.state
    
        return (
            <Form className="login" onSubmit={this.signIn}>
                <FormGroup>
                    <Label for="Email">メールアドレス</Label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email@email.com"
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                    {
                        error.code === "auth/user-not-found" ?
                        <p style={{color: 'firebrick', fontSize: '15px' }}>メールアドレスが 間 違って います</p> 
                        :
                        null
                    }   
                </FormGroup>
                <FormGroup>
                    <Label for="Password">パスワード</Label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="パスワード"
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                    {
                        error.code === "auth/wrong-password" ?
                        <p style={{color: 'firebrick', fontSize: '15px' }}>パスワードが 間 違って います</p> 
                        :
                        null
                    }
                </FormGroup>
                <Button>Submit</Button>
                <p>
                    アカウントを作成するにはここを<Link to="/signup">クリック</Link> 下さい！
                </p>
            </Form>

        );
    }
}

export default withRouter(Login);