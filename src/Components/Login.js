import React, { useCallback, useContext, useState } from "react";
import { withRouter, Link, Redirect } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button, } from "reactstrap";
import firebase from "./firebase";
import {AuthContext} from "../Components/Context/Auth";

const Login = ({ history }) => {
    const [error, setError] = useState("");
    const [noInput, setNoInput] = useState(false);
    const signIn = useCallback(
        async e => {
            e.preventDefault();
            const {email, password} = e.target.elements;
            if( !email.value && !password.value) {
                setNoInput(true);
            }
            await firebase
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)
                .catch(error  => {
                    setError(error.code);
                });
        },
        []
    );

    const {currentUser} = useContext(AuthContext);

    if(currentUser) {
        return <Redirect to="/cards" />;
    }

    return (
        <Form className="login" onSubmit={signIn}>
            <FormGroup>
                <Label for="Email">メールアドレス</Label>
                <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email@email.com"
                />
                {
                    error === "auth/user-not-found" ?
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
                />
                {
                    error === "auth/wrong-password" ?
                        <p style={{color: 'firebrick', fontSize: '15px' }}>パスワードが 間 違って います</p>
                        :
                        null
                }
            </FormGroup>
            {
                noInput &&
                    <p style={{color: 'firebrick', fontSize: '13px' }}>メールアドレスとパスワードを入力してください</p>

            }
            <br />
            <Button>Submit</Button>
            <p className="login-p">
                アカウントを作成するにはここを<Link to="/registration">クリック</Link> 下さい！
            </p>
        </Form>
    );
}

export default withRouter(Login);