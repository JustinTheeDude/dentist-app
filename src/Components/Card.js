import React, {Component} from "react";
import firebase from "firebase";
import {Link} from "react-router-dom";
import CardInfo from "./CardInfo";
import Layout from "./Layout";

import AppProvider, {MyContext} from "./Context/AppProvider";

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
                        {this.state.items.map(item => {
                            return (
                                <Link
                                    to={{
                                        pathname: "/info",
                                    }}
                                    onClick={() => context.updateCard(item.id)}
                                    key={item.id}
                                >
                                    <div className="contact-cards">
                                        <div className="contact-info">
                                            <h1>{item.contactName}</h1>
                                            <p>{item.address}</p>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </MyContext.Consumer>
        );
    }
}

export default Card;
