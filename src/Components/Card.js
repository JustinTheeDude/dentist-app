  
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
        const itemsRef = firebase.database().ref(`Dentist/${user.uid}/Form`);
        let newState = [];
       
        if(user) {
            itemsRef.orderByChild("patientID").on("value", snap => {
                let items = snap.val();
                let dbKeys = Object.keys(items);
                snap.forEach(child => {
                    newState.push({
                        patientName: child.val().patientName,
                        address: child.val().address,
                        complete: child.val().complete,
                        patientID: child.val().patientID
                    })
                })
            

                newState.forEach((entry,i) => {
                    entry["id"] = dbKeys[i]
                 
                })
                setOrders(newState);
            });
        }
      
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