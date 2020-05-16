import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom';
import {Form, FormGroup, Label, Input, Button, } from "reactstrap";
import firebase from "./firebase";

class Login extends Component {
    state = {
        email: "",
        password: "",
        errors: []
    };

    signIn = e => {
        e.preventDefault()
        const { email, password} = this.state
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
            .catch( err  => {
                console.log("this is the login catch error: ", err);
            });

    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        return (
            <Form className="login" onSubmit={this.signIn}>
                <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email@email.com"
                        onChange={this.handleChange}
                        value={this.state.email}
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
                        value={this.state.password}
                    />
                </FormGroup>
                <Button>Submit</Button>
                <p>
                 Don't have an account? <Link to="/signup">Click here</Link> to sign in!
                </p>
            </Form>

        );
    }
}

export default withRouter(Login);