import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import {AuthContext} from "../Components/Context/Auth";

const NotificationBar = () => {
    const {currentUser} = useContext(AuthContext);
    // console.log(currentUser)
    return (
        <div className="notification-container">
            {/* <div className="search-notification"> */}
            {/*     <input className="search-bar" type="text" placeholder="Search" /> */}
            {/* </div> */}
            {
                currentUser?
                    <div> Welcome, {currentUser.displayName} </div>
                    : null
            }
            {
                currentUser?
                    <Link to="/signout">Sign Out</Link>
                    :
                        <Link to="/">Sign in</Link>
            }
            {/* <Link to="/signout">Sign Out</Link> */}
        </div>
    );
}

export default NotificationBar;
