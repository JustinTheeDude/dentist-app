import React, {Component} from "react";
import { Link } from 'react-router-dom';
import firebase from 'firebase';
class NotificationBar extends Component {

    render() {
     let user = null
     user = firebase.auth().currentUser
      let name;
      if(user) {
         name = user.displayName
      } 
      console.log("username in notification: ", name)
      //  firebase.auth().onAuthStateChanged( user => {
      //      console.log("this is the user name in notification: ", user.displayName)
      //  })
        return (
            <div className="notification-container">
                <div className="search-notification">
                    <input className="search-bar" type="text" placeholder="Search" />
                </div>
                {
                name? 
                <div> Welcome, {name} </div> 
                : null 
                }
                {
                user ?
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
