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
        let newState = [];
        let itemsRef;
        if(user) {
            itemsRef = firebase.database().ref(`Dentist/${user.uid}/Form`);
            itemsRef.orderByChild("patientID").on("value", snap => {

                snap.forEach(child => {
                    newState.push({
                        id: child.key,
                        patientName: child.val().patientName,
                        date: child.val().date,
                        complete: child.val().complete,
                        patientID: child.val().patientID
                    })
                })

                setOrders(newState);
            });
        }
        return () =>{ itemsRef && itemsRef.off() }   
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