import React, {Component} from "react";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import firebase from "./firebase";

class Login extends Component {
    state = {
        email: "",
        password: "",
    };

    signIn = (email, password) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(function(res) {
                console.log(res);
            })
            .catch(function(err) {
                console.log(err);
            });
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        return (
            <Form className="login" onSubmit={this.signIn(this.state.email, this.state.password)}>
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
            </Form>
        );
    }
}

export default Login;