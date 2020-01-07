import React, {Component} from "react";
import Header from "./Components/Header";
import MainInfo from "./Components/MainInfo";
import Calendar from "react-calendar";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
            selectedDate: new Date(),
        };
    }
    render() {
        const {selectedDate} = this.state;

        return (
            <div>
                <Header />
                <MainInfo />
                <Calendar selectRange={true} />
            </div>
        );
    }

    handleDayClick(newDay) {
        const {selectedDate} = this.state;

        this.setState({
            selectedDate: new Date(selectedDate.getFullYear(), selectedDate.getMonth(), newDay),
        });
    }
}

export default App;
