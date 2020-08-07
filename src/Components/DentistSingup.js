import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import firebase from './firebase';
import { withRouter, Link } from 'react-router-dom'


class DentistSignup extends Component {

    state = {
        displayName: "",
        dentist_office: "",
        dentist_id: "",
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
                    const dentistRef = firebase.database().ref(`Dentist/${user.uid}/Info`)
                    const  dentist = {
                        displayName: this.state.displayName,
                        dentist_office: this.state.dentist_office,
                        dentist_id: user.uid,
                        email: this.state.email,
                    }
                    dentistRef.set(dentist)
                    if(user) {
                        user.updateProfile({
                            displayName
                        })
                        this.props.history.push('/cards')
                    }
                    this.setState({
                        displayName: "",
                        dentist_office:"",
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
            dentist_office,
            email,
            password,
            confirmPassword,
            nameError,
            confirmPwError,
            firebaseErr,
        } = this.state;
        return (
            <Form className="signup" onSubmit={this.signUp} >
                <h1>歯科医の登録</h1>
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
                    <Label for="dentist_office">病院名</Label>
                    <Input
                        type="text"
                        name="dentist_office"
                        id="dentist_office"
                        placeholder="病院名"
                        onChange={this.handleChange}
                        value={dentist_office}
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
                    <Button className="btn-singup">Submit</Button>
                    {/* margin property */}
                    &nbsp;&nbsp;&nbsp;
                    <Button className="btn-singup" onClick={this.cancel}>Cancel</Button>
                    
                    <p style={{color: 'white', fontSize: '20px' }}>
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

export default withRouter(DentistSignup);
