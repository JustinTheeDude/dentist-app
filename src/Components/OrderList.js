import React, {useState,useEffect} from "react";
import {MyContext} from "./Context/AppProvider";
import CompleteOrder from "./CompleteOrder";
import CardInfo from "../Components/CardInfo";
import { Link } from 'react-router-dom'

const OrderList = ({orders, pagination}) => {
    
    const [orderId, setOrder] = useState("");
    const [orderView, setOrderView] = useState(false);

    const setUserOrder = (order) => {
        setOrder(order);
        setOrderView(true);
    }
    // let patientId;
    // let patientNames = [];
    // orders.map( order => { 
    //     patientId = order.patientID
    //     patientNames.push(order.patientName)
    // });
    // let names = [...new Set(patientNames)]

    const goBack = () => {
        setOrderView(false);
    }
    useEffect(() => {


        let unmounted = false;

        if(!unmounted) {
            setOrder("");

        }
        return () => unmounted = true;

    }, []); 
    const contentRender = (orderView, orderId, orders, context) => {
        if(orderView) {
            return  (
                <>
                    <button className="back-button" onClick={goBack}></button>
                    <CardInfo value={orderId}/>
                </>
            )
        } else {
            return (
                <>
                <h1 className="card-title">Orders</h1>
                <div className="table-titles">
                    <ul>
                        <li>Patient Name</li>
                        <li>Hospital Address</li>
                        <li>Order Status</li>
                    </ul>
                </div>
                <div className="contact-cards">
                    {orders.map(order => {
                        return (
                            <ul className="card-info" key={order.id}>
                                <li>{order.patientName}</li>
                                <li>{order.address}</li>
                                <CompleteOrder order={order.complete} />
                                <li className="info-button" onClick={() => setUserOrder(order.id)}>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    </li>
                                </ul>
                        );
                    })}
                </div>
            {pagination}
        </>

            );
        }
    }
   
    return (
        <MyContext.Consumer>
            {context => (
                <div className="cards">
                    {contentRender(orderView, orderId, orders, context)}
                </div>
            )}
        </MyContext.Consumer>
    );
};

export default OrderList;
