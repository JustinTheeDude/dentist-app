import React from "react";
import {MyContext} from "./Context/AppProvider";
import CompleteOrder from "./CompleteOrder";
import {Link} from "react-router-dom";

const OrderList = ({orders, pagination}) => {
    return (
        <MyContext.Consumer>
            {context => (
                <div className="cards">
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
                                    <li className="info-button">
                                        <Link
                                            to={{
                                                pathname: "/info",
                                            }}
                                            onClick={() => context.updateCard(order.id)}
                                        >
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                        </Link>
                                    </li>
                                </ul>
                            );
                        })}
                    </div>
                    {pagination}
                </div>
            )}
        </MyContext.Consumer>
    );
};

export default OrderList;
