import React, {useState} from "react";
import {MyContext} from "./Context/AppProvider";
import CardInfo from "../Components/CardInfo";
import ListItem from "../Components/ListItem";

const OrderList = ({orders, pagination}) => {

    const [orderId, setOrder] = useState("");
    const [orderView, setOrderView] = useState(false);

    const setUserOrder = (order) => {
        setOrder(order);
        setOrderView(true);
    }

    const goBack = () => {
        setOrderView(false);
    }
    
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
                        <li>Patient ID</li>
                        <li>Order Status</li>
                    </ul>
                </div>
                <div className="contact-cards">
                {
                    orders.map(order => {
                        return  <ListItem order={order} key={order.id} setUserOrder={setUserOrder} /> 
                    }) 
                } 
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