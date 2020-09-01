import React, {useEffect, useState} from "react";
import firebase from "firebase";
import OrderList from "./OrderList";
import Pagination from "./Pagination";


const Card = () => {
    const [orders, setOrders] = useState([]);
    const [orderPerPage] = useState(10);
    const [currentOrderPage, setCurrentOrderPage] = useState(1);
    useEffect(() => {
        const user = firebase.auth().currentUser;
        let unmounted = false;
        if(user) {
            const itemsRef = firebase.database().ref(`Dentist/${user.uid}/Form`);
            let newState = [];
            itemsRef.on("value", snap => {
                let items = snap.val();
                for (let item in items) {
                    newState.push({
                        id: item,
                        patientName: items[item].patientName,
                        address: items[item].address,
                        complete: items[item].complete,
                    });
                }

                if(!unmounted) {
                    setOrders(newState);
                    newState = [];
                }
            });
        }

        return () => unmounted = true;
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