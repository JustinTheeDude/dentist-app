import React, {Component} from "react";
import firebase from "firebase";
import {BrowserRouter as Router, Link} from "react-router-dom";

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
            <Router>
                    <div className="cards">
                        {this.state.items.map(item => {
                            return (           
                            <Link to={`${item.id}`} key={item.id}>
                                <div className="contact-cards" key={item.id}>
                                    <div className="contact-info">
                                        <h1>{item.contactName}</h1>
                                        <p>{item.address}</p>
                                    </div>
                                </div>
                            </Link>
                            );
                        })}
                    </div>
            </Router>
        );
    }
}

export default Card;
