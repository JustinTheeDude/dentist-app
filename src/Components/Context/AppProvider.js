import React, {Component} from "react";

export const MyContext = React.createContext();

class AppProvider extends Component {
    state = {
        chosenCard: "",
        lastCardId: "",
    };

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

export default AppProvider;