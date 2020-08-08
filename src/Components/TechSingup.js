import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import firebase from './firebase';
import { withRouter, Link } from 'react-router-dom'


class TechSignup extends Component {

    state = {
        tech_name: "",
        displayName: "",
        tech_office: "",
        tech_id: "",
        email: "",
        password: "",
        confirmPassword: "",
        nameError: [],
        confirmPwError: [],
        firebaseErr : [],
    }

    signUp = e => {

        e.preventDefault();
        let { email, password, confirmPassword, displayName, } = this.state

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
                    const techRef = firebase.database().ref(`Technician/${user.uid}/Info`)
                    const  tech = {
                        displayName: this.state.displayName,
                        tech_office: this.state.tech_office,
                        tech_id: user.uid,
                        email: this.state.email,
                    }
                    techRef.set(tech)
                    if(user) {
                        user.updateProfile({
                            displayName
                        })
                        this.props.history.push('/cards')
                    }
                    // console.log("this is the user object after name input: ", user)
                    this.setState({
                        displayName: "",
                        tech_office:"",
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
            tech_office,
            email,
            password,
            confirmPassword,
            nameError,
            confirmPwError,
            firebaseErr,
        } = this.state;
        return (
            <Form className="signup" onSubmit={this.signUp} >
                <h1>技術者登録</h1>
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
                    <Label for="tech_office">会社名</Label>
                    <Input
                        type="text"
                        name="tech_office"
                        id="tech_office"
                        placeholder="会社名"
                        onChange={this.handleChange}
                        value={tech_office}
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
                    <Button>Submit</Button>
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

export default withRouter(TechSignup);