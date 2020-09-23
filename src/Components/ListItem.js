import React from "react";
import CompleteOrder from "./CompleteOrder";

const ListItem = ({ order, setUserOrder}) => {

    return (
        <ul className="card-info">
            <li>{order.patientName}</li>
            <li>{order.patientID}</li>
            <CompleteOrder order={order.complete} />
            <li className="info-button" onClick={() => setUserOrder(order.id)}>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </li>
        </ul>
    );
}

export default ListItem;