import React, {Component} from "react";

class CompleteOrder extends Component {
    render() {
        return (
            <li className="status">
                {this.props.order === true ? (
                    <span className="complete-dot">Complete</span>
                ) : (
                    <span className="incomplete-dot">incomplete</span>
                )}
            </li>
        );
    }
}

export default CompleteOrder;
