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
    };

    componentDidMount() {
        const itemsRef = firebase.database().ref("Form");
        const self = this;

        itemsRef.on("value", snap => {
            let items = snap.val();
            for (let item in items) {
                console.log(items[item]);
                self.setState({
                    id: item,
                    contactName: items[item].contactName,
                    address: items[item].address,
                });
            }

            console.log(this.state);
        });
    }

    render() {
        return (
            <MyContext.Provider
                value={{
                    state: this.state,
                    updateCard: cardId => {
                        this.setState({chosenCard: cardId, lastCardId: cardId});
                    },
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }

}
export const Consumer = MyContext.Consumer

export default AppProvider;