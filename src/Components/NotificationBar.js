import React, {Component} from "react";
import { Link } from 'react-router-dom';
import firebase from 'firebase';
class NotificationBar extends Component {

    render() {
        const user = firebase.auth().currentUser;
        // let name;
        // if(user) {
        //     name = user.displayName;
        // }
        return (
            <div className="notification-container">
                <div className="search-notification">
                    <input className="search-bar" type="text" placeholder="Search" />
                </div>
                {
                user ? 
                <div> Welcome, {user.displayName} </div> 
                : null 
                }
                {
                user ?
                <Link to="/signout">Sign Out</Link>
                :
                <Link to="/signup">Sign up</Link>
                }                
            </div>

        );
    }
}

export default NotificationBar;
