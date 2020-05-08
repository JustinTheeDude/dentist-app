import React, {useEffect, useState} from "react";
import firebase from "firebase";
import OrderList from "./OrderList";
import Pagination from "./Pagination";
import {Link} from "react-router-dom";
import AppProvider, {MyContext} from "./Context/AppProvider";

const Card = () => {
    const [orders, setOrders] = useState([]);
    const [orderPerPage] = useState(4);
    const [currentOrderPage, setCurrentOrderPage] = useState(1);

    useEffect(() => {
        const itemsRef = firebase.database().ref("Form");
        let newState = [];
        itemsRef.on("value", snap => {
            let items = snap.val();
            for (let item in items) {
                newState.push({
                    id: item,
                    contactName: items[item].contactName,
                    address: items[item].address,
                    complete: items[item].complete,
                });
            }
            setOrders(newState);
        });
    }, []);

    const indexOfLastOrder = currentOrderPage * orderPerPage;
    const indexOfFirstOrder = indexOfLastOrder - orderPerPage;
    const currentOrder = orders.slice(indexOfFirstOrder, indexOfLastOrder);
    const numbers = document.querySelectorAll(".number");

    const paginate = (pageNumber, e) => {
        numbers.forEach(number => {
            number.classList.remove("active");
        });
        e.target.classList.add("active");
        setCurrentOrderPage(pageNumber);
    };
  
    return (
        <>
            <OrderList
                orders={currentOrder}
                pagination={<Pagination orderPerPage={orderPerPage} totalOrders={orders.length} paginate={paginate} />}
            />
        </>
    );
};


export default Card;