import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component {
    render () {
        return (
            <Form>
            <FormGroup>
              <Label for="Email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="email@email.com" />
            </FormGroup>
            <FormGroup>
              <Label for="Password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="enter your password" />
            </FormGroup>
            </Form>
        )
    }
}

export default Login