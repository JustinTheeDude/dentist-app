import React from "react";
// import CompleteOrder from "./CompleteOrder";

const ListItem = ({patientID, order, setUserOrder, id}) => {

    return (
        <ul className="card-info">
            <li>{order.patientName}</li>
            <li>{patientID}</li>
            <li>{order.date}</li>
            {/* <CompleteOrder order={order.complete} /> */}
            <li className="info-button" onClick={() => setUserOrder(order.id)}>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </li>
        </ul>
    );
}

export default ListItem;