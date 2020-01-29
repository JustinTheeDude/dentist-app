import React, {Component} from "react";
import firebase from "firebase";

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
            <div className="cards">
                {this.state.items.map(item => {
                    return (
                        <div className="contactCards" key={item.id}>
                            <h1>{item.contactName}</h1>
                            <h1>{item.address}</h1>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Card;
