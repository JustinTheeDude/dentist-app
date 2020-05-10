import React, { Component } from "react";
export const MyContext = React.createContext();

class AppProvider extends Component {
    state = {
        chosenCard: "",
        lastCardId: "",
        authenticatedUser: null
    };

    render() {
        const { authenticatedUser } = this.state
        return (
            <MyContext.Provider
                value={{
                    authenticatedUser,
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