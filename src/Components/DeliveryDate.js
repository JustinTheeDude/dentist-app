import React from "react";
import { Fragment } from "react";
const DeliveryDate = (props) => {
    return (
        <Fragment>
        {/* <h3>Order dates</h3> */}
            <div className="delivery-div"> order date is: {this.props.orderDate}/Your order date is: {this.props.dueDate}</div>
        </Fragment> 
    )
}

export default DeliveryDate;