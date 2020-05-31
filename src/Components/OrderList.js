import React, {useState} from "react";
import {MyContext} from "./Context/AppProvider";
import CompleteOrder from "./CompleteOrder";
import CardInfo from "../Components/CardInfo";

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
                    <button onClick={goBack}>Back</button>
                    <CardInfo value={orderId}/>
                </>
            )
        } else {
            return (
                <>
                <h1 className="card-title">Orders</h1>
                <div className="table-titles">
                    <ul>
                        <li>Customer Name</li>
                        <li>Address</li>
                        <li>Status</li>
                    </ul>
                </div>
                <div className="contact-cards">
                    {orders.map(order => {
                        return (
                            <ul className="card-info" key={order.id}>
                                <li>{order.contactName}</li>
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
