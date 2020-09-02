import React, { Component } from "react";
import firebase from "firebase";


export const MyContext = React.createContext();

class AppProvider extends Component {
    state = {
        chosenCard: "",
        lastCardId: "",
        id: "",
        contactName: "",
        address: "",
        orderView: false
    };

    componentDidMount() {

        const itemsRef = firebase.database().ref("Form");
        const self = this;

        itemsRef.on("value", snap => {
            let items = snap.val();
            for (let item in items) {
                self.setState({
                    id: item,
                    contactName: items[item].contactName,
                    address: items[item].address,
                });
            }
        });
    }

    render() {
        return (
            <MyContext.Provider
                value={{
                    state: this.state,
                    updateCard: cardId => {
                        if(!this.state.orderView) {
                            this.setState({chosenCard: cardId, lastCardId: cardId, orderView: true});
                        }
                    },
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }

}

export default AppProvider;