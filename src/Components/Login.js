import React,  { Component } from 'react';

import { Form, FormGroup, Label, Input, Button} from 'reactstrap';

class Login extends Component {

    render() {
        return (
            <Form>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
            <Button>Login</Button>
            </Form>
        );
    }
}

export default Login;