import React, {Component} from "react";
import { Link } from 'react-router-dom';
import firebase from 'firebase';

class NotificationBar extends Component {

    state = {
        name: "",
        user: false
    }


    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if(user.emailVerified) {
                this.setState(prevState => ({
                    name: user.displayName,
                    user: true,
                }));
            }
        })
    }

    render() {
        return (
            <div className="notification-container">
                <div className="search-notification">
                    <input className="search-bar" type="text" placeholder="Search" />
                </div>
                {
                this.state.name?
                <div> Welcome, {this.state.name} </div>
                : null
                }
                {
                this.state.user ?
                <Link to="/signout">Sign Out</Link>
                :
                <Link to="/">Sign in</Link>
                }
                {/* <Link to="/signout">Sign Out</Link> */}
            </div>

        );
    }
}

export default NotificationBar;
