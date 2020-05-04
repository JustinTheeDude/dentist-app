import React, {Component} from "react";
import firebase from "firebase";
import {Link} from "react-router-dom";
import CardInfo from "./CardInfo";
import Layout from "./Layout";
import AppProvider, {MyContext} from "./Context/AppProvider";
import NotificationBar from "./NotificationBar";

class Card extends Component {
    state = {
        items: [],
    };

    componentDidMount() {
        const itemsRef = firebase.database().ref("Form");
        itemsRef.on("value", snap => {
            let items = snap.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    contactName: items[item].contactName,
                    address: items[item].address,
                });
            }
            this.setState({items: newState});
        });
    }

    render() {
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
                            {this.state.items.map(item => {
                                return (
                                    <ul className="card-info">
                                        <li>{item.contactName}</li>
                                        <li>{item.address}</li>
                                        <li className="status">
                                            <span className="complete-dot">Complete</span>
                                        </li>
                                        <li className="info-button">
                                            <Link
                                                to={{
                                                    pathname: "/info",
                                                }}
                                                onClick={() => context.updateCard(item.id)}
                                                key={item.id}
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
                        <div className="pages">
                            <div className="number">
                                <p>1</p>
                            </div>
                        </div>
                    </div>
                )}
            </MyContext.Consumer>
        );
    }
}

export default Card;