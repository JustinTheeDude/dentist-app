import React from "react";
// import { Fragment } from "react";
// import { render } from "@testing-library/react";
const DeliveryDate = props => (
    <div className="delivery-div">
        Order date: {props.day}. Delivery date: {props.delivery}
    </div>
);

export default DeliveryDate;