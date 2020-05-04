import React, {Component} from "react";

class NotificationBar extends Component {
    render() {
        return (
            <div className="notification-container">
                <div className="search-notification">
                    <input className="search-bar" type="text" placeholder="Search" />
                </div>
            </div>
        );
    }
}

export default NotificationBar;
