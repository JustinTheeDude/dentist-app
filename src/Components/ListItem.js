import React from "react";
// import CompleteOrder from "./CompleteOrder";

const ListItem = ({ patientID, id ,order, setUserOrder }) => {

    return (
       
        <ul className="card-info" >
            <li  key={patientID}>{order.lNameKanji}</li>
            <li key={id}>{patientID}</li>
            <li>{order.date}</li>
            {/* <CompleteOrder order={order.complete} /> */}
            <li className="info-button" onClick={() => setUserOrder(id)}>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </li>
        </ul>
    );
}

export default ListItem;