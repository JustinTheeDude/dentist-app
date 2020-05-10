import React, {Component} from "react";
import { Link } from 'react-router-dom';
class NotificationBar extends Component {
    render() {
        return (
            <div className="notification-container">
                <div className="search-notification">
                    <input className="search-bar" type="text" placeholder="Search" />
                </div>
                <Link to="/signout">Sign Out</Link>
            </div>
        );
    }
}

export default NotificationBar;
